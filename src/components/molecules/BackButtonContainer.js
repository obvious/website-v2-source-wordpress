import React from "react"

const BackButtonContainer = ({ className, children, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <div className="h-16 lg:h-20"/>
      <div className="fixed z-40 site-header-pushdown top-0 py-4 min-h-16 lg:min-h-20 left-0 right-0 flex items-center justify-center bg-gray-10">
        <div className="container px-10 flex items-center">
          {children}
        </div>
      
      </div>
    
    </div>
  )
}

export default BackButtonContainer;