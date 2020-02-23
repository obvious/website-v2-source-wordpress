import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/index"
import HeroTitle from "../components/HeroTitle"
import ArticleCarousel from "../components/ArticleCarousel"
import PublicationCard from "../components/PublicationCard"

export default () => (
  <Layout>
    <HeroTitle>
      A blurb about our evolving curations on how we're tackling some complex
      global challenges.
    </HeroTitle>
    <div className="py-2">
      <h3 className="text-white font-semibold font-sans text-lg border-b border-gray-500 py-2">
        Recent Articles
      </h3>
      <ArticleCarousel />
    </div>
    <div>
      <h2 className="text-white font-semibold font-sans text-lg border-b border-gray-500 py-2">
        All Publications
      </h2>
      <div className="flex flex-wrap justify-between py-4">
        <PublicationCard
          title="Obvious at Large"
          description="A fresh approach to context and location of those just coming online. Here we chronicle the learnings, insights and processes that we’ve learnt along the way"
          tags={[`Recently Updated`]}
          coverImage="../images/image.png"
        />
        <PublicationCard
          title="Inside Obvious"
          description="A fresh approach to context and location of those just coming online. Here we chronicle the learnings, insights and processes that we’ve learnt along the way"
          tags={[`New`]}
          coverImage="../images/287.png"
        />
      </div>
    </div>
  </Layout>
)
