import React from "react"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"

export default ({ children, showFooter = true }) => {
  return (
    <div className="flex flex-col justify-start antialiased bg-logCabin min-h-screen">
      <SiteHeader />
      <main className="container px-20">{children}</main>
      {showFooter && <SiteFooter />}
    </div>
  )
}
