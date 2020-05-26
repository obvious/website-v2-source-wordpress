import React, { useEffect } from "react"
import { graphql, navigate } from "gatsby"
import { Helmet } from "react-helmet"

import ArticleLayout from "../layouts/ArticleLayout"
import { Quote } from "../components/Quote"
import { Heading } from "../components/Heading"
import { Separator } from "../components/Separator"
import { BodyText } from "../components/BodyText"
import { Byline } from "../components/Byline"
import BackButtonContainerForArticle from "../components/molecules/BackButtonContainerForArticle"
import "../styles/article.css"
import { Code } from "../components/Code"
import { Video } from "../components/Video"
import { Embed } from "../components/Embed"
import PreviewCompatibleImage from "../components/atoms/PreviewCompatibleImage"
import { Column } from "../components/Column"
import { Columns } from "../components/Columns"

function assignComponent(block, index) {
  const content = block.originalContent
  const innerBlocks = block.innerBlocks
  // List of all core block components available on the default gutenberg editor
  // https://gist.github.com/DavidPeralvarez/37c8c148f890d946fadb2c25589baf00#file-core-blocks-txt
  switch (block.name) {
    case "core/paragraph":
      // We use dangerouslySetInnerHTML within Paragraph and Heading blocks
      // because the content field gives us html tags in them -
      // em, strong, a tags
      return (
        <BodyText
          key={index}
          type="body-medium"
          className="text-light/gray-10"
          content={block.paragraphattributes.content}
        />
      )

    case "core/heading":
      return (
        <Heading key={index} className="text-gray-10 -mb-2" content={content} />
      )

    case "core/image":
      //TODO: w-full applies on lg, w-super otherwise
      return (
        <PreviewCompatibleImage
          image={block}
          className="w-full mb-7 lg:mb-9 lg:mx-0 self-center"
        />
      )

    case "core/quote":
      return (
        <Quote key={index} author={block.quoteattributes.citation}>
          {block.quoteattributes.value}
        </Quote>
      )

    case "core/columns":
      return (
        <Columns key={index} >
          {innerBlocks &&
           innerBlocks.map((innerBlock, index) => {
              return assignComponent(innerBlock, index)
            })}
        </Columns>
      )

    case "core/column":
      return (
        <Column key={index} width={block.columnattributes.width}>
          {innerBlocks &&
           innerBlocks.map((innerBlock, index) => {
              return assignComponent(innerBlock, index)
            })}
        </Column>
      )

    case "core/separator":
      return <Separator key={index} />

    case "core/list":
      return (
        <BodyText
          key={index}
          type="body-medium"
          className="text-light/gray-10 lg:mb-18 ml-8 lg:ml-16"
          content={block.listattributes.values}
        />
      )

    case "core/code":
      return (
        <Code
          key={index}
          content={block.codeattributes.content}
          language={block.codeattributes.language}
          showLines={block.codeattributes.lineNumbers}
        />
      )

    case "core/video":
      return <Video video={block} className="mb-16 lg:mb-18" />

    case "core-embed/youtube":
      return <Embed embed={block} className="mb-16 lg:mb-18" />

    case "core-embed/vimeo":
      return <Embed embed={block} className="mb-16 lg:mb-18" />

    default:
      console.error(block.name, content)
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

  // This function checks whether any clicked link is an internal or external one
  // and routes things accordingly.
  useEffect(() => {
    const links = [
      ...document
        .getElementsByClassName("article-container")[0]
        .getElementsByTagName("a"),
    ]
    links.map(link => {
      const handleClick = event => {
        event.preventDefault()
        if (link.host.includes("obvious.in")) {
          return navigate(link.pathname)
        } else {
          window.open(link.href, "_blank")
        }
      }
      link.addEventListener("click", handleClick)
    })
  }, [])

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
      <div className="flex flex-col lg:w-2/3 self-end mb-18 lg:mb-24">
        {/*TODO: refactor once heading has been refactored to include tag-picking*/}
        <Heading
          className="text-gray-10 mb-6 lg:mb-8 break-words-hyphenated"
          content={`<h1>${article.title}</h1>`}
        />
        {article.articles.metadata.subtitle && (
          <BodyText
            type="subtitle-medium"
            className="mb-6 lg:mb-8 text-light/gray-30"
          >
            {article.articles.metadata.subtitle}
          </BodyText>
        )}
        {article.articles.metadata.author && (
          <Byline
            date={date}
            author={article.articles.metadata.author[0].title}
          />
        )}
      </div>
      {/*grid-template-columns: 1fr;*/}
      {/*grid-template-rows: repeat(12, 1fr);*/}

      <div className="grid grid-flow-row row-gap-8">
        {article.blocks.map((block, index) => assignComponent(block, index))}
      </div>
    </ArticleLayout>
  )
}

//The Image block does not work when aliased, unclear why
export const query = graphql`
  query($id: ID!, $publicationSlug: String) {
    WP {
      article(id: $id) {
        id
        title
        date
        blocks {
          ...AllBlocks
          ... on WP_CoreColumnsBlock {
            name
            innerBlocks {
              ... on WP_CoreColumnBlock {
                name
                columnattributes: attributes {
                  width
                }
                innerBlocks {
                  ...AllBlocks
                }
              }
            }
          }
        }
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
                  fluid {
                    ...GatsbyImageSharpFluid
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

export const fragment = graphql`
  fragment AllBlocks on WP_Block {
    ... on WP_CoreParagraphBlock {
      name
      paragraphattributes: attributes {
        ... on WP_CoreParagraphBlockAttributesV3 {
          content
        }
      }
    }
    ... on WP_CoreImageBlock {
      name
      attributes {
        alt
        caption
        url
      }
      imageFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    ... on WP_CoreCodeBlock {
      name
      codeattributes: attributes {
        content
        language
        lineNumbers
      }
    }
    ... on WP_CoreHeadingBlock {
      name
      originalContent
    }
    ... on WP_CoreListBlock {
      name
      listattributes: attributes {
        values
      }
    }
    ... on WP_CoreQuoteBlock {
      name
      quoteattributes: attributes {
        value
        citation
      }
    }
    ... on WP_CoreSeparatorBlock {
      name
    }
    ... on WP_CoreVideoBlock {
      name
      videoattributes: attributes {
        caption
        src
        preload
        controls
        loop
        muted
        playsInline
      }
    }
    ... on WP_CoreEmbedYoutubeBlock {
      name
      originalContent
      embedattributes: attributes {
        caption
        providerNameSlug
        type
        url
      }
    }
    ... on WP_CoreEmbedVimeoBlock {
      name
      embedattributes: attributes {
        caption
        providerNameSlug
        url
        type
      }
    }
  }
`
