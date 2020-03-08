import React from "react"

export default ({ featuredClientBlock }) => (
  <div className="flex text-gray-400 flex-wrap justify-between">
    {featuredClientBlock.map(({ client, description, link }) => (
      <div className="w-1/3 my-4 mr-4">
        <h2 className="font-semibold text-xl text-white font-sans">{client}</h2>
        <p className="py-2 font-serif">{description}</p>
        {link && (
          <a className="text-xs text-bittersweet font-sans" href={link.href}>
            {link.text}
          </a>
        )}
      </div>
    ))}
  </div>
)
