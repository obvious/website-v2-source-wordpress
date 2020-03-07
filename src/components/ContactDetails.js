import React from "react"

export default ({ details }) => (
  <div className="w-2/6 ml-auto">
    {details.map(({ title, description, link }) => (
      <div>
        <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
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
        <a className="text-xs text-bittersweet font-sans" href={link.href}>
          {link.text}
        </a>
      </div>
    ))}
  </div>
)
