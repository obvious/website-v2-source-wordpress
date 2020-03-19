import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import ArticleCard from "../components/ArticleCard"
import StackedImage from "../components/StackedImage"
import Colophon from "../components/Colophon"

export default ({ data }) => {
  const {
    WP: { publication },
  } = data
  return (
    <Layout>
      <Helmet>
        <title> TODO: Publication name | Publications | Obvious</title>
      </Helmet>
      <div className="py-20 flex">
        <div className="flex-col flex inline-flex w-2/5">
          <div className="w-48">
            <StackedImage
              className=""
              image={publication.publication.coverimage.sourceUrl}
            />
          </div>
          <h3 className="text-white font-sans font-medium leading-tight text-2xl">
            {/*{publication.publication.name}*/}
          </h3>
          <p className="font-serif text-gray-300 mt-4 leading-snug">
            {publication.publication.description}
          </p>
          {publication.publication.colophon && <Colophon colophon={publication.publication.colophon} />}
        </div>
        <div className="w-3/5 pl-16">
          {publication.publication.iscasestudy ?  publication.publication.casestudy.map(({ articles, slug }) => (
            <ArticleCard
              iscasestudy
              slug={slug}
              title={articles.metadata.title}
              excerpt={articles.metadata.subtitle}
            />
          )) : publication.publication.article.map(({ articles, slug, date }) => (
            <ArticleCard
              slug={slug}
              title={articles.metadata.title}
              excerpt={articles.metadata.subtitle}
              date={date}
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
            coverimage {
              altText
              srcSet
              sourceUrl
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
                articles {
                  metadata {
                    author
                    subtitle
                    title
                  }
                }
              }
            }
            casestudy {
              ... on WP_CaseStudy {
                slug
                articles {
                  metadata {
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
