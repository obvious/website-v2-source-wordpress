import React from "react"
import BackButton from "../atoms/BackButton"

const BackButtonContainerSimple = ({ children, to, className }) => {
  return (<div className={`${className}`}>
    <div className="h-16 lg:h-20"/>
    <div className="fixed z-40 site-header-pushdown top-0 h-16 lg:h-20 left-0 right-0 flex items-center justify-center bg-gray-10">
      <div className="container px-10">
        <BackButton to={to}>{children}</BackButton>
      </div>
    </div>
  </div>)
}

export default BackButtonContainerSimple;