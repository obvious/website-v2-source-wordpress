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
import "../styles/article.css"

function assignComponent(name, content, innerBlocks, index) {
  // List of all core block components available on the default gutenberg editor
  // TODO: all of these need to be implemented and taken care of in this switch (or disabled on the editor itself)
  // https://gist.github.com/DavidPeralvarez/37c8c148f890d946fadb2c25589baf00#file-core-blocks-txt
  switch (name) {
    case "core/paragraph":
      return (
        <BodyText
          key={index}
          type="body-medium"
          className="text-light/gray-10 my-2 lg:my-5"
          content={content}
        />
      )

    case "core/heading":
      return <Heading key={index} className="my-2 lg:my-5" content={content} />

    case "core/image":
      //TODO: w-full applies on lg, w-super otherwise
      return (
        <Image
          key={index}
          className="w-full w-super my-9 lg:my-10 lg:mx-0 self-center"
          content={content}
        />
      )

    case "core/quote":
      return <Quote key={index}>{content}</Quote>

    case "core/columns":
      return (
        <div key={index} className="article-columns lg:grid lg:gap-8 lg:grid-cols-2">
          {innerBlocks &&
            innerBlocks.map(({ name, originalContent, innerBlocks }, index) => {
              return assignComponent(name, originalContent, innerBlocks, index)
            })}
        </div>
      )

    case "core/column":
      return (
        <div key={index} className="article-column">
          {innerBlocks &&
            innerBlocks.map(({ name, originalContent, innerBlocks }, index) => {
              return assignComponent(name, originalContent, innerBlocks, index)
            })}
        </div>
      )

    case "core/separator":
      return <Separator key={index} />

    case "core/list":
      return (
        <BodyText
          key={index}
          type="body-medium"
          className="text-light/gray-10 my-8 lg:mb-20 ml-8 lg:ml-16"
          content={content}
        />
      )

    case "core/code":
      return <BodyText type="code" className="" content={content} />

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
        <html lang="en" />
        {/*TODO: Fix html characters showing up here*/}
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
        {/*TODO: refactor once heading has been refactored to include tag-picking*/}
        <Heading
          className="text-gray-10 my-3 lg:my-4 break-words-hyphenated"
          content={`<h1>${article.title}</h1>`}
        />
        {article.articles.metadata.subtitle && (
          <BodyText
            type="subtitle-medium"
            className="my-3 lg:my-4 text-light/gray-30"
          >
            {article.articles.metadata.subtitle}
          </BodyText>
        )}
        {article.articles.metadata.author && (
          <Byline
            date={date}
            author={article.articles.metadata.author[0].title}
            className="my-3 lg:my-4"
          />
        )}
      </div>
      <div className="flex flex-col">
        {article.blocks.map(({ name, originalContent, innerBlocks }, index) =>
          assignComponent(name, originalContent, innerBlocks, index)
        )}
      </div>
    </ArticleLayout>
  )
}

//This query only supports three levels of recursion - because we do not plan to use blocks such as 'groups' yet.
//TODO: Figure out an easier way to do this (possibly with NUWEB-133)
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
            author {
              ... on WP_People {
                title
              }
            }
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
              personresponsible {
                ... on WP_People {
                  title
                }
              }
            }
            iscasestudy
            article {
              ... on WP_Article {
                slug
                date
                title
                articles {
                  metadata {
                    author {
                      ... on WP_People {
                        title
                      }
                    }
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
