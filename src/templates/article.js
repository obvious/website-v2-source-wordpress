import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import ArticleLayout from "../layouts/ArticleLayout"
import ArticleTitle from "../components/ArticleTitle"
import ArticleSubtitle from "../components/ArticleSubtitle"
import Quote from "../components/Quote"
import Image from "../components/Image"
import { Heading } from "../components/Heading"
import Separator from "../components/Separator"

function assignComponent(name, content, innerBlock) {
  switch (name) {
    case "core/paragraph":
      return (
        <p
          className="font-serif m-10 text-lg"
          dangerouslySetInnerHTML={{ __html: content }}
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
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleSubtitle>{article.articles.metadata.subtitle}</ArticleSubtitle>
        <div className="my-4">
          <span className="text-black uppercase font-sans font-semibold text-xs">
            {date}
          </span>
          <span className="text-world font-serif italic text-xs"> by </span>
          <span className="uppercase font-sans font-semibold text-xs text-bittersweet">
            {article.articles.metadata.author}
          </span>
        </div>
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
