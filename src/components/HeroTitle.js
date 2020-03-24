import React from "react"
import { Heading } from "./Heading"

export default ({ children }) => {
  return (
    //TODO: Why aren't these classes being applied?
    <Heading className="mt-32 mb-20" type="h1">
      {children}
    </Heading>
  )
}
