import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ClientList from "../components/ClientList"
import FeaturedClientsList from "../components/FeaturedClientsList"
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
      <div className="grid grid-flow-row sm:grid-cols-2 col-gap-8 md:col-gap-0 row-gap-8">
        <FeaturedClientsList featuredClientBlock={page.client.featuredclientblock} />
      </div>
      <div className="h-40"/>
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
            subtitle
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
