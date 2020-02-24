import React from "react"
// import { Link } from "gatsby"

export default ({ curationBy, illustrationBy }) => {
  return (
    <>
      <span className="text-white font-sans font-medium text-sm mt-8 border-b border-gray-300 pb-2">
        Colophon
      </span>
      <div className="mt-2">
        <span className="font-serif text-gray-300 text-xs italic font-medium">
          Curated by 
        </span>
        <span className="font-sans uppercase text-bittersweet text-xs font-medium">
          {curationBy}
        </span>
      </div>
      <div>
        <span className="font-serif text-gray-300 text-xs italic font-medium">
          Cover Illustration by 
        </span>
        <span className="font-sans uppercase text-bittersweet text-xs font-medium">
          {illustrationBy}
        </span>
      </div>
    </>
  )
}
