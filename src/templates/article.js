import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import ArticleLayout from "../layouts/ArticleLayout"
import ArticleSubtitle from "../components/ArticleSubtitle"
import Quote from "../components/Quote"
import Image from "../components/Image"
import { Heading } from "../components/Heading"
import Separator from "../components/Separator"
import { BodyText } from "../components/BodyText"
import { Byline } from "../components/Byline"

function assignComponent(name, content, innerBlock) {
  switch (name) {
    case "core/paragraph":
      return (
        <
          BodyText
          type="body-medium"
          className="text-light/gray-10 m-10"
          content={content}
        />
      )

    case "core/heading":
      //TODO: decouple type + tag from gutenberg? do we HAVE to use content here? Explore.
      return <Heading content={content} />

    case "core/image":
      return <Image content={content} />

    case "core/quote":
      return <Quote dangerouslySetInnerHTML={{ __html: content }} />

    case "core/columns":
      innerBlock &&
        assignComponent(
          innerBlock.name,
          innerBlock.originalContent,
          innerBlock.innerBlock
        )
      break

    case "core/column":
      innerBlock &&
        assignComponent(
          innerBlock.name,
          innerBlock.originalContent,
          innerBlock.innerBlock
        )
      break

    case "core/separator":
      return <Separator />

    case "core/list":
      return 

    default:
      console.error(name, content)
  }
}

export default ({ data }) => {
  const {
    WP: { article },
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
      <main className="container px-20 py-20">
        <Heading type="h1" className="text-gray-10 my-4">
          {article.title}
        </Heading>
        <BodyText type="subtitle-medium" className="my-4 text-light/gray-30">{article.articles.metadata.subtitle}</BodyText>
        <Byline date={date} author={article.articles.metadata.author} className="my-4" />
        
        <div>
          {article.blocks.map(({ name, originalContent }) =>
            assignComponent(name, originalContent)
          )}
        </div>
      </main>
    </ArticleLayout>
  )
}

export const query = graphql`
  query($id: ID!) {
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
    }
  }
`
