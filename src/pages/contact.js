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
        <ContactForm contactForm={page.contact.contactform} />
        <ContactDetails contactAsideBlock={page.contact.contactasideblock} />
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
            formtitle
            formdescription
          }
          contactasideblock {
            title
            description
            linktext
            link
          }
        }
      }
    }
  }
`
