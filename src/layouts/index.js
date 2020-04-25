import React from "react"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"

export default ({ children, showFooter = true, className }) => {
  
  return (
    <div className={`flex flex-col justify-start antialiased bg-gray-10 min-h-screen ${className}`}>
      <SiteHeader />
      <main className="container mx-auto">
        <div className="px-10 sm:py-10">{children}</div>
      </main>
      {showFooter && <>
        <div className="h-20" />
        <SiteFooter />
      </>}
    </div>
  )
}
