import React from "react"

export default ({ title, description, linkText, link }) => {
  return (
    <div className="block">
      <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
        {title}
      </span>
      <p className="py-2 text-xs font-serif">{description}</p>
      <a className="text-xs text-bittersweet font-sans" href={link}>
        {linkText}
      </a>
    </div>
  )
}
