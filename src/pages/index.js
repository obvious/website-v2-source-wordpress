import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ClientList from "../components/ClientList"
import FeaturedClient from "../components/FeaturedClient"

export default ({ data }) => {
  const {
    WP: { page },
  } = data
  return (
    <Layout>
      <Helmet>
        <title>Home | Obvious</title>
      </Helmet>
      <Hero title={page.client.hero} />
      <FeaturedClient featuredClientBlock={page.client.featuredclientblock} />
      <ClientList listOfClientListBlocks={page.client.listofclientlistblocks} />
    </Layout>
  )
}

export const query = graphql`
  {
    WP {
      page(id: "cGFnZTo0Mg==") {
        client {
          hero
          featuredclientblock {
            client
            description
            link {
              text
              href
              typeoflink
            }
          }
          listofclientlistblocks {
            clientlistblock {
              title
              namelist {
                name
              }
            }
          }
        }
      }
    }
  }
`
