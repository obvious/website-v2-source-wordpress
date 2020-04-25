import React from "react"
import FeaturedClient from "./molecules/FeaturedClient"

export default ({ featuredClientBlock }) => (
  <>
    {featuredClientBlock.map(({ client, subtitle, link }) => (
      <FeaturedClient subtitle={subtitle} client={client} link={link} />
    ))}
  </>
)
