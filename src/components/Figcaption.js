import React from "react"

export const Figcaption = ({ children, className }) => {
  return (
    <Figcaption
      className={`${className} font-sans text-base font-medium text-gray-30 mt-4 lg:mt-8 text-center w-full`}
    >
      {children}
    </Figcaption>
  )
}
