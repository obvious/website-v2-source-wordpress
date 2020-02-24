import React from "react"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"

export default ({ children }) => {
  return (
    <div
      className="flex flex-col justify-start antialiased min-h-screen"
      style={{ backgroundColor: "#FBFCF7" }}
    >
      <SiteHeader />
      <main className="container px-20 py-20">{children}</main>
      <SiteFooter />
    </div>
  )
}
