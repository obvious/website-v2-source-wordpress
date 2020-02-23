import React from "react"
// import { Link } from "gatsby"

export default ({ client, blurb, caseStudy }) => {
  return (
    <div className="w-1/3 my-4 mr-4">
      <h2 className="font-semibold text-xl text-white font-sans">{client}</h2>
      <p className="py-2 font-serif">{blurb}</p>
      {caseStudy && (
        <a className="text-xs text-bittersweet font-sans" href={caseStudy}>
          Read Case Study
        </a>
      )}
    </div>
  )
}
