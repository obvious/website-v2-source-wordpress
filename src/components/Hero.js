import React from "react"
import { Heading } from "./Heading"

export default ({ title, subtitle }) => {
  return (
    //TODO: styles of h2, semantically h1
    <>
    <Heading className="mt-18 lg:mt-24 mb-6" type="h2">
      {title}
    </Heading>
    <Heading className="">
      {subtitle}
    </Heading>
      </>
  )
}
