import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../layouts/index"
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
import ContactDetails from "../components/ContactDetails"
import { ObviousGridRow } from "../components/atoms/ObviousGrid"

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
      <ObviousGridRow className="w-full text-gray-400">
        <div className="flex-col w-full flex col-start-1 col-end-13 sm:col-end-8 md:col-end-6">
          <ContactForm
            title={page.contact.form.title}
            description={page.contact.form.description}
          />
        </div>
        <div className="flex-col w-full flex col-start-1 col-end-13 sm:col-start-9">
          <ContactDetails details={page.contact.details} />
        </div>
      </ObviousGridRow>
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
