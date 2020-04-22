import React from "react"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"

export default ({ children }) => {
  return (
    <div
      className="flex flex-col justify-start antialiased min-h-screen pt-14"
      style={{ backgroundColor: "#FBFCF7" }}
    >
      <SiteHeader />
      <main className="container article-container px-7 lg:px-10 pb-7 lg:pb-20 flex flex-col self-center">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
