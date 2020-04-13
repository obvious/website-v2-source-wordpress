import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ArticleCarousel from "../components/ArticleCarousel"
import PublicationCard from "../components/PublicationCard"
import { Heading } from "../components/Heading"

export default ({ data }) => {
  const {
    WP: { page, articles },
  } = data
  return (
    <Layout>
      <Helmet>
        <title>Publications | Obvious</title>
      </Helmet>
      <Hero title={page.publications.hero} />
      <div className="py-2 mb-24 lg:mb-32">
        <Heading type="h5" className="text-gray-90 border-b-2 border-light/gray-30 py-3">
          Recent Articles
        </Heading>
        <ArticleCarousel articles={articles.nodes} />
      </div>
      <div>
        <Heading type="h5" className="border-b-2 border-light/gray-30 py-3">
          All Publications
        </Heading>
        <div className="grid md:col-gap-20 md:row-gap-10 md:grid-cols-2 lg:col-gap-40 lg:row-gap-10 lg:grid-cols-2 xl:col-gap-64 xl:row-gap-10 xl:grid-cols-2 justify-between pt-8">
          {page.publications.publicationlist.map(({ publication, slug, title }) => (
            <PublicationCard
              slug={slug}
              title={title}
              description={publication.description}
              tags={[]}
              coverImage={publication.coverimage}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($after: WP_DateInput, $before: WP_DateInput) {
    WP {
      articles(
        where: {
          orderby: { field: DATE, order: DESC }
          dateQuery: {
            after: $after
            before: $before
            inclusive: true
            relation: AND
          }
        }
      ) {
        nodes {
          title
          slug
          date
        }
      }
      page(id: "cGFnZTo2Mg==") {
        title
        publications {
          hero
          publicationlist {
            ... on WP_Publication {
              title
              slug
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
              }
            }
          }
        }
      }
    }
  }
`
