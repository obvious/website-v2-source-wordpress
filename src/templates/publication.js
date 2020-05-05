import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import ArticleCard from "../components/ArticleCard"
import StackedImage from "../components/StackedImage"
import Colophon from "../components/Colophon"
import { Heading } from "../components/Heading"
import { BodyText } from "../components/BodyText"
import BackButtonContainerForPublication from "../components/molecules/BackButtonContainerForPublication"
import { ObviousGridRow } from "../components/atoms/ObviousGrid"

export default ({ data }) => {
  const {
    WP: { publication },
  } = data

  return (
    <Layout className="bg-light/gray-70">
      <Helmet>
        <html lang="en" />
        <title> {publication.title} | Publications | Obvious</title>
      </Helmet>
      <BackButtonContainerForPublication
        backButtonTo={"/publications"}
        buttonText={"All Publications"}
      />
      <ObviousGridRow className="py-20 w-full">
        <div className="flex-col w-full flex col-start-1 col-end-13 sm:col-end-5">
          <div className="mb-10">
            <StackedImage image={publication.publication.coverimage} />
          </div>
          <Heading type="h3" className="text-gray-10">
            {publication.title}
          </Heading>
          <BodyText
            type="body-medium"
            className="text-light/gray-30 mt-4"
            content={publication.publication.description}
          />
          {publication.publication.colophon[0].personresponsible[0] && (
            <Colophon colophon={publication.publication.colophon} />
          )}
        </div>
        <div className="w-full col-start-1 col-end-13 sm:col-start-6 md:col-start-6 sm:col-end-13">
          {publication.publication.iscasestudy
            ? publication.publication.casestudy.map(
                ({ articles, slug, title, id }) => (
                  <ArticleCard
                    iscasestudy
                    key={id}
                    slug={slug}
                    title={title}
                    excerpt={articles.metadata.subtitle}
                  />
                )
              )
            : publication.publication.article.map(
                ({ articles, slug, date, title, id }) => (
                  <ArticleCard
                    key={id}
                    slug={slug}
                    title={title}
                    excerpt={articles.metadata.subtitle}
                    date={date}
                    author={
                      articles.metadata.author[0]
                        ? articles.metadata.author[0].title
                        : ""
                    }
                  />
                )
              )}
        </div>
      </ObviousGridRow>
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
                id
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
                id
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
