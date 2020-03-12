import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import ArticleLayout from "../layouts/ArticleLayout"
import ArticleTitle from "../components/ArticleTitle"
import ArticleSubtitle from "../components/ArticleSubtitle"
import Quote from "../components/Quote"


export default ({ data }) => {
  const {
    WP: { article },
  } = data
  let date = new Date(article.date).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
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
        <div
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        >
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
