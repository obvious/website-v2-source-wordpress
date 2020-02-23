import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/index"
import HeroTitle from "../components/HeroTitle"
import ContactForm from "../components/ContactForm"
import ContactDetails from "../components/ContactDetails"

export default () => (
  <Layout>
    <HeroTitle>Get in touch.</HeroTitle>
    <div className="flex text-gray-400">
      <ContactForm />
      <ContactDetails />
    </div>
  </Layout>
)
