import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import ArticleLayout from "../layouts/ArticleLayout"
import Quote from "../components/Quote"
import Image from "../components/Image"
import { Heading } from "../components/Heading"
import Separator from "../components/Separator"
import { BodyText } from "../components/BodyText"
import { Byline } from "../components/Byline"
import BackButtonContainerForArticle from "../components/molecules/BackButtonContainerForArticle"
import ArticleCarousel from "../components/ArticleCarousel"

function assignComponent(name, content, innerBlocks) {
  // List of all core block components available on the default gutenberg editor
  // TODO: all of these need to be implemented and taken care of in this switch (or disabled on the editor itself)
  // https://gist.github.com/DavidPeralvarez/37c8c148f890d946fadb2c25589baf00#file-core-blocks-txt
  switch (name) {
    case "core/paragraph":
      return (
        <BodyText
          type="body-medium"
          className="text-light/gray-10 my-2 lg:my-5"
          content={content}
        />
      )

    case "core/heading":
      return <Heading className="my-2 lg:my-5" content={content} />

    case "core/image":
      //TODO: w-full applies on lg, w-super otherwise
      return (
        <Image
          className="w-full w-super my-9 lg:my-10 lg:mx-0 self-center"
          content={content}
        />
      )

    case "core/quote":
      return <Quote>{content}</Quote>

    case "core/columns":
      return (
        <div className="grid gap-0 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          {innerBlocks &&
            innerBlocks.map(({ name, originalContent, innerBlocks }) => {
              return assignComponent(name, originalContent, innerBlocks)
            })}
        </div>
      )

    case "core/column":
      return (
        <div className="">
          {innerBlocks &&
            innerBlocks.map(({ name, originalContent, innerBlocks }) => {
              return assignComponent(name, originalContent, innerBlocks)
            })}
          {/*{" "}*/}
          {/*{innerBlocks &&*/}
          {/*  console.log(innerBlocks) &&*/}
          {/*  assignComponent(*/}
          {/*    innerBlocks.name,*/}
          {/*    innerBlocks.originalContent,*/}
          {/*    innerBlocks.innerBlock*/}
          {/*  )}{" "}*/}
        </div>
      )

    case "core/separator":
      return <Separator />

    case "core/list":
      console.log(content)
      return (
        <BodyText
          type="body-medium"
          className="text-light/gray-10 my-8 lg:mb-20 ml-16"
          content={content}
        />
      )

    default:
      console.error(name, content)
  }
}

export default ({ data }) => {
  const {
    WP: { article, publicationBy: publication },
  } = data
  let date = new Date(article.date).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <ArticleLayout>
      <Helmet>
        <title>{article.title} | Articles | Obvious</title>
      </Helmet>
      {publication && publication.publication && (
        <BackButtonContainerForArticle
          backButtonTo={`/publications/${publication.slug}`}
          titleText={article.title}
          buttonText={publication.title}
          image={publication.publication.coverimage}
          articles={publication.publication.article}
        />
      )}
      <div className="flex flex-col lg:w-2/3 self-end">
        <Heading type="h1" className="text-gray-10 my-3 lg:my-4">
          {article.title}
        </Heading>
        {article.articles.metadata.subtitle && (
          <BodyText
            type="subtitle-medium"
            className="my-3 lg:my-4 text-light/gray-30"
          >
            {article.articles.metadata.subtitle}
          </BodyText>
        )}
        <Byline
          date={date}
          author={article.articles.metadata.author}
          className="my-3 lg:my-4"
        />
      </div>
      <div className="flex flex-col">
        {article.blocks.map(({ name, originalContent, innerBlocks }) =>
          assignComponent(name, originalContent, innerBlocks)
        )}
      </div>
    </ArticleLayout>
  )
}

export const query = graphql`
  query($id: ID!, $publicationSlug: String) {
    WP {
      article(id: $id) {
        id
        title
        date
        blocks {
          name
          originalContent
          innerBlocks {
            name
            originalContent
            innerBlocks {
              name
              originalContent
              innerBlocks {
                name
                originalContent
              }
            }
          }
        }
        content
        date
        articles {
          metadata {
            author
            subtitle
          }
        }
      }
      publicationBy(slug: $publicationSlug) {
        id
        title
        slug
        ... on WP_Publication {
          publication {
            description
            coverimage {
              altText
              srcSet
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            colophon {
              nameoffield
              personresponsible
            }
            iscasestudy
            article {
              ... on WP_Article {
                slug
                date
                title
                articles {
                  metadata {
                    author
                    subtitle
                  }
                }
              }
            }
            casestudy {
              ... on WP_CaseStudy {
                slug
                title
                articles {
                  metadata {
                    subtitle
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
