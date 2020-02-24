import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/index"
import HeroTitle from "../components/HeroTitle"
import ClientList from "../components/ClientList"
import FeaturedClient from "../components/FeaturedClient"

export default () => (
  <Layout>
    <HeroTitle>
      A blurb about our clients and we transform ideas into household names.
    </HeroTitle>
    <div className="flex text-gray-400 flex-wrap justify-between">
      <FeaturedClient
        client="Quintype"
        blurb="Reengineering India’s leading news org’s web-publishing platform to work
        2x faster"
        caseStudy="https://obvious.in/case-study/quintype/"
      />
      <FeaturedClient
        client="Dunzo"
        blurb="Streamlining engineering to create product scalability for Dunzo’s
          hyperlocal market"
        caseStudy="https://obvious.in/case-study/dunzo/"
      />
      <FeaturedClient
        client="Gojek"
        blurb="Redesigning the driver partner app for Indonesia’s most loved
          ride-sharing aggregator"
        caseStudy="https://obvious.in/case-study/gojek/"
      />
      <FeaturedClient
        client="Loco"
        blurb="Redesigning Pocket Aces’ game app with 10M+ downloads that lets you
          win real money"
        caseStudy="https://obvious.in/case-study/loco/"
      />
      <FeaturedClient
        client="2GUD"
        blurb="Contributing ~$1B in revenue by product vision for Flipkart’s pivot
          into refurbished products market"
        caseStudy="https://obvious.in/case-study/2gud/"
      />
    </div>
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
