import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import HeroTitle from "../components/HeroTitle"
import ArticleCarousel from "../components/ArticleCarousel"
import PublicationCard from "../components/PublicationCard"
import { Typography } from "../components/Typography"

export default ({ data }) => {
  const {
    WP: { page, articles },
  } = data
  return (
    <Layout>
      <Helmet>
        <title>Publications | Obvious</title>
      </Helmet>
      <HeroTitle>{page.publications.hero}</HeroTitle>
      <div className="py-2 my-32">
        <Typography type="h5" className="text-gray-90 border-b border-gray-500 py-3">
          Recent Articles
        </Typography>
        <ArticleCarousel articles={articles.nodes} />
      </div>
      <div>
        <Typography type="h5" className="border-b border-gray-500 py-3">
          All Publications
        </Typography>
        <div className="grid grid-flow-row grid-cols-2 col-gap-48 row-gap-32 pt-8">
          {page.publications.publicationlist.map(({ publication, slug, title }) => (
            <PublicationCard
              slug={slug}
              title={title}
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
                }
              }
            }
          }
        }
      }
    }
  }
`
