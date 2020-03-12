import React from "react"

export default ({ children }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: children,
      }}
      className="font-sans font-semibold text-sm text-gray-50 leading-tight my-4"
    ></div>
  )
}
