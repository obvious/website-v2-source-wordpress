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
        <title> {publication.title} | Publications | Obvious</title>
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
            {publication.title}
          </h3>
          <p className="font-serif text-gray-300 mt-4 leading-snug" dangerouslySetInnerHTML={{__html: publication.publication.description}} >
          </p>
          {publication.publication.colophon && <Colophon colophon={publication.publication.colophon} />}
        </div>
        <div className="w-3/5 pl-16">
          {publication.publication.iscasestudy ?  publication.publication.casestudy.map(({ articles, slug, title }) => (
            <ArticleCard
              iscasestudy
              slug={slug}
              title={title}
              excerpt={articles.metadata.subtitle}
            />
          )) : publication.publication.article.map(({ articles, slug, date, title }) => (
            <ArticleCard
              slug={slug}
              title={title}
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
