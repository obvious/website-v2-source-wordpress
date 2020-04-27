import React from "react"
import FeaturedClient from "./molecules/FeaturedClient"

export default ({ featuredClientBlock }) => (
  <>
    {featuredClientBlock.map(({ client, subtitle, link }, index) => (
      <div className={`col-span-12 md:col-span-4 sm:col-span-5 ${index % 2 === 0 ? 'sm:col-start-1 md:col-start-1' : 'sm:col-start-7 md:col-start-7'}`}>
        <FeaturedClient subtitle={subtitle} client={client} link={link} />
      </div>
    ))}
  </>
)
