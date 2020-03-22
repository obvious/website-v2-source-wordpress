import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import ClientCard from "../components/ClientCard"
import HeroTitle from "../components/HeroTitle"
import ClientBrowser from "../components/ClientBrowser"

export default ({ data }) => {
  const {
    WP: { page },
  } = data
  return (
    <Layout>
      <Helmet>
        <title>Home | Obvious</title>
      </Helmet>
      <HeroTitle>{page.hero.title}</HeroTitle>
      <div className="grid grid-cols-2 gap-2 my-24 pb-10 max-w-5xl">
        {page.hero.featuredclients.map(
          ({ name, statistic, description, fullwidth }) => (
            <ClientCard
              client={name}
              statistic={statistic}
              description={description}
              fullWidth={fullwidth}
            />
          )
        )}
      </div>
      <ClientBrowser />
    </Layout>
  )
}

export const query = graphql`
  {
    WP {
      page(id: "cGFnZToxMA==") {
        hero {
          title
          featuredclients {
            name
            statistic
            description
            fullwidth
          }
        }
      }
    }
  }
`
