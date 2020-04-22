import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ArticleCarousel from "../components/ArticleCarousel"
import PublicationCard from "../components/PublicationCard"
import { Heading } from "../components/Heading"
import { isInLast30Days } from "../utils/date"

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
      <div className="lg:pr-48">
        <div className="py-2 mb-24 lg:mb-32">
          <Heading
            type="h5"
            className="text-gray-90 border-b-2 border-light/gray-30 py-3"
          >
            Recent Articles
          </Heading>
          {/* TODO - add the actual check based on dates */}
          {articles.nodes.length && (
            <>
              <div className="h-8" />
              <ArticleCarousel articles={articles.nodes} />
            </>
          )}
        </div>
        <div>
          <Heading type="h5" className="border-b-2 border-light/gray-30 py-3">
            All Publications
          </Heading>
          <div className="grid md:col-gap-20 md:row-gap-10 md:grid-cols-2 lg:col-gap-40 lg:row-gap-10 lg:grid-cols-2 xl:col-gap-64 xl:row-gap-10 xl:grid-cols-2 justify-between pt-8">
            {page.publications.publicationlist.map(
              ({ publication, slug, title, date }) => {
                let tags = []
                if (isInLast30Days(date)) {
                  tags = [...tags, { type: "yellow", text: "New" }]
                }

                const isPublicationRecentlyUpdated = (
                  publication.article || []
                ).reduce((acc, item) => {
                  return isInLast30Days(item.date) || acc
                }, false)

                if (isPublicationRecentlyUpdated) {
                  tags = [...tags, { type: "blue", text: "Recently Updated" }]
                }
                return (
                  <PublicationCard
                    slug={slug}
                    title={title}
                    description={publication.description}
                    tags={tags}
                    coverImage={publication.coverimage}
                  />
                )
              }
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

// NOTE - For 'new' and 'recently updated' tags, we're opting to do this not on client side.
// Its easier to set up a daily server re-run rather than perfecting the experience on the client.
// This will also ensure the tags are generated with the pages

export const query = graphql`
  query publicationsQuery {
    WP {
      articles(where: { orderby: { field: DATE, order: DESC } }, first: 15) {
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
              date
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
                article {
                  ... on WP_Article {
                    id
                    date
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
