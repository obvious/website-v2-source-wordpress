import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import HeroTitle from "../components/HeroTitle"
import ArticleCarousel from "../components/ArticleCarousel"
import PublicationCard from "../components/PublicationCard"

export default ({ data }) => {
  const {
    WP: { page },
  } = data
  return (
    <Layout>
      <HeroTitle>{page.publications.hero}</HeroTitle>
      <div className="py-2">
        <h3 className="text-white font-semibold font-sans text-lg border-b border-gray-500 py-2">
          Recent Articles
        </h3>
        <ArticleCarousel />
      </div>
      <div>
        <h2 className="text-white font-semibold font-sans text-lg border-b border-gray-500 py-2">
          All Publications
        </h2>
        <div className="flex flex-wrap justify-between py-4">
          {page.publications.publicationlist.map(({ publication }) => (
            <PublicationCard
              title={publication.name}
              description={publication.description}
              tags={[]}
              coverImage={publication.coverimage.sourceUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    WP {
      page(id: "cGFnZTo2Mg==") {
        title
        publications {
          hero
          publicationlist {
            ... on WP_Publication {
              publication {
                description
                name
                coverimage {
                  altText
                  srcSet
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`
