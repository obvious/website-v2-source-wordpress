import React from "react"

const Tag = ({ className, tagType, children,  ...props}) => {
  const typeBasedClassNames = {
    'yellow': 'text-gray-10 bg-yellow-50',
    'blue': 'text-gray-10 bg-blue-50'
  }
  return (<span className={`${className || ''} font-sans text-sm font-medium rounded px-2 py-1 ${typeBasedClassNames[tagType]}`} {...props}>
    {children}
  </span>)
}

export default Tag;