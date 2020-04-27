import React from "react"
import FeaturedClient from "./molecules/FeaturedClient"

export default ({ featuredClientBlock }) => (
  <>
    {featuredClientBlock.map(({ client, subtitle, link }) => (
      <div className={`col-span-12 md:col-span-4 sm:col-span-5 sm:odd:col-start-1 md:odd:col-start-1 sm:even:col-start-7 md:even:col-start-7`}>
        <FeaturedClient subtitle={subtitle} client={client} link={link} />
      </div>
    ))}
  </>
)
