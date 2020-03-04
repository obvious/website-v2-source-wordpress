import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import HeroTitle from "../components/HeroTitle"
import ContactForm from "../components/ContactForm"
import ContactDetails from "../components/ContactDetails"

export default ({ data }) => {
  const {
    WP: { page },
  } = data
  return (
    <Layout>
      <HeroTitle>{page.contact.hero}</HeroTitle>
      <div className="flex text-gray-400">
        <ContactForm />
        {page.contact.contactasideblock.map(
          ({ title, description, hasLink, linktext, link }) => (
            <div className="w-2/6 ml-auto flex flex-col">
              <ContactDetails
                title={title}
                description={description}
                link={link}
                linkText={linktext}
              />
            </div>
          )
        )}
        <ContactDetails />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    WP {
      page(id: "cGFnZTozMQ==") {
        contact {
          hero
          contactform {
            formdescription
          }
          contactasideblock {
            title
            description
            haslink
            linktext
            link
          }
        }
      }
    }
  }
`
