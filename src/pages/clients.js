import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import HeroTitle from "../components/HeroTitle"
import ClientList from "../components/ClientList"
import FeaturedClient from "../components/FeaturedClient"

  <Layout>
    <div className="container py-2 text-gray-500 flex flex-wrap items-start justify-between font-sans">
      <ClientList
        category="Payments"
        clients={[
          `Slicepay`,
          `Zoto`,
          `Fisdom`,
          `Citruspay`,
          `Payzippy`,
          `Paisool`,
        ]}
      />
      <ClientList
        category="Logistics"
        clients={[`Dunzo`, `Swiggy`, `Zomato`, `Gojek`]}
      />
      <ClientList
        category="Not-For-Profit"
        clients={[
          `Resolve to Save Lives`,
          `Pratham Books`,
          `YourStory`,
          `Ashoka Foundation`,
        ]}
      />
      <ClientList
        category="Education"
        clients={[`Gradeup`, `IMAX`, `Loco`, `Wikipedia`]}
      />
      <ClientList
        category="Ecommerce"
        clients={[`Flipkart`, `2Gud`, `Flyte`, `OLX`]}
      />
    </div>
  </Layout>
)
export default ({ data }) => {
  const {
    WP: { page },
  } = data
      <HeroTitle>{page.client.hero}</HeroTitle>
      <FeaturedClient featuredClientBlock={page.client.featuredclientblock} />

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
