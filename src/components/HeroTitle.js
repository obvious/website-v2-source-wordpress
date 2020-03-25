import React from "react"
import { Typography } from "./Typography"

export default ({ children }) => {
  return (
    //TODO: Why aren't these classes being applied?
    <Typography className="mt-32 mb-20" type="h1">
      {children}
    </Typography>
  )
}
