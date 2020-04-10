import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ClientList from "../components/ClientList"
import FeaturedClient from "../components/FeaturedClients"
import SectionTitle from "../components/atoms/SectionTitle"

export default ({ data }) => {
  const {
    WP: { page },
  } = data
  return (
    <Layout>
      <Helmet>
        <title>Home | Obvious</title>
      </Helmet>
      <Hero title={page.pageHero.title} subtitle={page.pageHero.subtitle} />
      <FeaturedClient featuredClientBlock={page.client.featuredclientblock} />
      <div className="h-40"></div>
      {/*TODO - the section title needs to come from wordpress*/}
      <SectionTitle className="mb-12">All Our Clients</SectionTitle>
      <ClientList listOfClientListBlocks={page.client.listofclientlistblocks} />
    </Layout>
  )
}

export const query = graphql`
  {
    WP {
      page(id: "cGFnZTo0Mg==") {
        pageHero {
          title
          subtitle
        }
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
