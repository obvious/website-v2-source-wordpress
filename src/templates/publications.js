import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ArticleCarousel from "../components/ArticleCarousel"
import PublicationCard from "../components/PublicationCard"
import { Heading } from "../components/Heading"
import { isInLast30Days } from "../utils/date"
import { ObviousGridRow } from "../components/atoms/ObviousGrid"

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
      <div>
        <div className="py-2 mb-24 lg:mb-32">
          <ObviousGridRow>
          <Heading
            type="h5"
            className="col-span-12 md:col-span-10 text-gray-90 border-b-2 border-light/gray-30 py-3"
          >
            Recent Articles
          </Heading>
          </ObviousGridRow>
          {/* TODO - add the actual check based on dates */}
          {articles.nodes.length && (
            <ObviousGridRow>
              <div className="col-span-12 md:col-span-10">
                <div className="h-8" />
                <ArticleCarousel articles={articles.nodes} />
              </div>
            </ObviousGridRow>
          )}
        </div>
        <div>
          <ObviousGridRow className="w-full pt-8">
            <Heading type="h5" className="col-span-12 md:col-span-10 border-b-2 border-light/gray-30 py-3">
              All Publications
            </Heading>
          </ObviousGridRow>
          <ObviousGridRow className="w-full pt-8">
            {page.publications.publicationlist.map(
              ({ publication, slug, title, date }, index) => {
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
                
                // Grid placement based on index
                return (
                  <div className={`col-span-12 md:col-span-4 sm:col-span-5 ${index % 2 === 0 ? 'sm:col-start-1 md:col-start-1' : 'sm:col-start-7 md:col-start-7'}`}>
                    <PublicationCard
                      slug={slug}
                      title={title}
                      description={publication.description}
                      tags={tags}
                      coverImage={publication.coverimage}
                    />
                  </div>
                )
              }
            )}
          </ObviousGridRow>
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
