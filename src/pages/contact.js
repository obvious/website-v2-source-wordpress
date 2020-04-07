import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
import ContactDetails from "../components/ContactDetails"

export default ({ data }) => {
  const {
    WP: { page },
  } = data
  return (
    <Layout>
      <Helmet>
        <title>Contact | Obvious</title>
      </Helmet>
      <Hero title={page.contact.hero} />
      <div className="flex text-gray-400">
        <ContactForm
          title={page.contact.form.title}
          description={page.contact.form.description}
        />
        <ContactDetails details={page.contact.details} />
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
          form {
            title
            description
          }
          details {
            title
            description
            link {
              text
              href
              typeoflink
            }
          }
        }
      }
    }
  }
`
