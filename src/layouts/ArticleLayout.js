import React from "react"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import ObviousContainer from "../components/atoms/ObviousContainer"

export default ({ children }) => {
  return (
    <div
      className="flex flex-col justify-start antialiased min-h-screen pt-14"
      style={{ backgroundColor: "#FBFCF7" }}
    >
      <SiteHeader />
      <ObviousContainer tag="main" className="article-container pb-7 sm:pb-20 flex flex-col self-center">
        {children}
      </ObviousContainer>
      <SiteFooter />
    </div>
  )
}
