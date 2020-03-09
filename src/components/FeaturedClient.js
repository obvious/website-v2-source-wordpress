import React from "react"

import RightArrow from "./icons/RightArrow"

export default ({ featuredClientBlock }) => (
  <div className="flex text-gray-400 flex-wrap justify-between">
    {featuredClientBlock.map(({ client, description, link }) => (
      <div className="w-1/3 my-4 mr-4 flex flex-col items-start">
        <h2 className="font-semibold text-xl text-white font-sans">{client}</h2>
        <p className="py-2 font-serif">{description}</p>
        {link && (
          <a
            className="text-xs text-bittersweet font-sans flex justify-center items-center"
            href={link.href}
          >
            {link.text}
            {link.text && (
              <RightArrow className="text-bittersweet fill-current px-2 h-3" />
            )}
          </a>
        )}
      </div>
    ))}
  </div>
)
