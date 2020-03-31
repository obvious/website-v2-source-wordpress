import React from "react"

import ExternalLink from "./icons/ExternalLink"

export default ({ details }) => (
  <div className="w-full md:w-2/6 mb-8 ml-auto grid gap-3" style={{alignContent: 'start'}}>
    {details.map(({ title, description, link }) => (
      <div>
        <span className="text-md text-white block border-b border-gray-500 font-semibold py-2 font-sans">
          {title}
        </span>
        {link.typeoflink === "Email" ? (
          <p className="py-2 text-xs font-serif">
            <a href={`mailto:${description}`}>{description}</a>
          </p>
        ) : link.typeoflink === "Phone Number" ? (
          <p className="py-2 text-xs font-serif">
            <a href={`tel:${description}`}>{description}</a>
          </p>
        ) : (
          <p className="py-2 text-xs font-serif">{description}</p>
        )}
        <a className="text-xs text-orange-50 font-sans flex" href={link.href}>
          {link.text}
          {link.text && <ExternalLink className="fill-current h-4 px-1" />}
        </a>
      </div>
    ))}
  </div>
)
