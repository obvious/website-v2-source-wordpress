import React from "react"

const ObviousContainer = ({className = '', children, tag = 'div',  ...props}) => {
  return React.createElement(tag,
    {
      className: `${className} container mx-auto px-7 sm:px-10`,
      ...props
    },
    children
  )
}

export default ObviousContainer;