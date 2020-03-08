import React from "react"
// import { Link } from "gatsby"

export default ({ colophon }) => {
  return (
    <>
      <span className="text-white font-sans font-medium text-sm mt-8 border-b border-gray-300 pb-2 mb-2">
        Colophon
      </span>
      {colophon.map(credit => (
        <div>
          <span className="font-serif text-gray-300 text-xs italic font-medium">
            {credit.nameoffield}&nbsp;
          </span>
          <span className="font-sans uppercase text-bittersweet text-xs font-medium">
            {credit.personresponsible}
          </span>
        </div>
      ))}
    </>
  )
}
