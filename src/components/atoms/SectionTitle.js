import React from "react"
import { Heading } from "../Heading"

const SectionTitle = ({children, ...props}) => {
  return (
    <div {...props}>
      <Heading type="h2">{children}</Heading>
    </div>
  )
}

export default SectionTitle;