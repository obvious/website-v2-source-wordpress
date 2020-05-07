import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ClientList from "../components/ClientList"
import FeaturedClientsList from "../components/FeaturedClientsList"
import SectionTitle from "../components/atoms/SectionTitle"
import { ObviousGridRow } from "../components/atoms/ObviousGrid"

export default ({ data }) => {
  const {
    WP: { page },
  } = data
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Home | Obvious</title>
      </Helmet>
      <Hero title={page.pageHero.title} subtitle={page.pageHero.subtitle} />
      <ObviousGridRow>
        <FeaturedClientsList featuredClientBlock={page.client.featuredclientblock} />
      </ObviousGridRow>
      <div className="h-40"/>
      {/*TODO - the section title needs to come from wordpress*/}
      <ObviousGridRow className="mb-12">
        <SectionTitle className="col-span-12 sm:col-span-10">All Our Clients</SectionTitle>
      </ObviousGridRow>
      <ObviousGridRow className="row-gap-16">
        <ClientList listOfClientListBlocks={page.client.listofclientlistblocks} />
      </ObviousGridRow>
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
