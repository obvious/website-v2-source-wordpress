import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/index"
import ArticleCard from "../components/ArticleCard"
import StackedImage from "../components/StackedImage"
import Colophon from "../components/Colophon"

export default ({ data }) => {
  console.log(data.WP.publication)
  const {
    WP: { publication },
  } = data
  return (
    <Layout>
      <div className="py-20 flex">
        <div className="flex-col flex inline-flex w-2/5">
          <div className="w-48">
            <StackedImage
              className=""
              image={publication.publication.coverimage.sourceUrl}
            />
          </div>
          <h3 className="text-white font-sans font-medium leading-tight text-2xl">
            {publication.publication.name}
          </h3>
          <p className="font-serif text-gray-300 mt-4 leading-snug">
            {publication.publication.description}
          </p>
          <Colophon colophon={publication.publication.colophon} />
        </div>
        <div className="w-3/5 pl-16">
          {publication.publication.article.map(({ articles }) => (
            <ArticleCard
              title={articles.metadata.title}
              excerpt={articles.metadata.subtitle}
              date={articles.metadata.datepublished}
              author={articles.metadata.author}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    WP {
      publication(id: $id) {
        id
        title
        ... on WP_Publication {
          publication {
            description
            name
            coverimage {
              altText
              srcSet
              sourceUrl
            }
            colophon {
              nameoffield
              personresponsible
            }
            article {
              ... on WP_Article {
                content
                articles {
                  metadata {
                    author
                    datepublished
                    subtitle
                    title
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
