import React from "react"

import Layout from "../layouts/index"
import ClientCard from "../components/ClientCard"
import HeroTitle from "../components/HeroTitle"
import ClientBrowser from "../components/ClientBrowser"

export default () => (
  <Layout showFooter={false}>
    <HeroTitle>We transform ideas into household names.</HeroTitle>
    <div className="grid grid-cols-2 gap-2 py-2 pb-10">
      <ClientCard
        client="Swiggy"
        statistic={100}
        description="Million Customers. First year. First app."
        half
      />
      <ClientCard
        client="Flipkart"
        statistic={"4x"}
        description="Million Customers. First year. First app."
        half
      />
      <ClientCard
        client="Myntra"
        description="Million Customers. First year. First app."
      />
      <ClientCard
        client="Wikipedia"
        description="Million Customers. First year. First app."
      />
    </div>
    <ClientBrowser />
  </Layout>
)
