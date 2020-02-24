import React from "react"

import Layout from "../layouts/index"
import ClientCard from "../components/ClientCard"
import HeroTitle from "../components/HeroTitle"
import ClientBrowser from "../components/ClientBrowser"

export default () => (
  <Layout showFooter={false}>
    <HeroTitle>We transform ideas into household names.</HeroTitle>
    <div className="flex justify-center flex-wrap py-2">
      <ClientCard client="Swiggy" width="half" />
      <ClientCard className="pl-2" client="Flipkart" width="half" />
      <ClientCard client="Myntra" width="full" />
      <ClientCard client="Wikipedia" width="full" />
    </div>
    <ClientBrowser />
  </Layout>
)
