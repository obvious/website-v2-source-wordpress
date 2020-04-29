import React from "react"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import ObviousContainer from "../components/atoms/ObviousContainer"

export default ({ children, showFooter = true, className }) => {
  
  return (
    <div className={`flex flex-col justify-start antialiased bg-gray-10 min-h-screen ${className}`}>
      <SiteHeader />
      <ObviousContainer tag="main" className="pb-7 pt-0 sm:py-10">
        {children}
      </ObviousContainer>
      {showFooter && <>
        <div className="h-20" />
        <SiteFooter />
      </>}
    </div>
  )
}
