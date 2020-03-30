import React from "react"

import RightArrow from "./icons/RightArrow"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"

export default ({ featuredClientBlock }) => (
  <div className="flex text-gray-400 flex-wrap justify-between">
    {featuredClientBlock.map(({ client, description, link }) => (
      <div className="w-1/3 my-4 mr-4 flex flex-col items-start">
        <Heading type="h3" className="font-medium">{client}</Heading>
        <BodyText type="body-large" className="py-2">{description}</BodyText>
        {/*TODO: Fix link*/}
        {link && (
          <a
            className="text-xs text-orange-50 font-sans flex justify-center items-center"
            href={link.href}
          >
            {link.text}
            {link.text && (
              <RightArrow className="text-orange-50 fill-current px-2 h-3" />
            )}
          </a>
        )}
      </div>
    ))}
  </div>
)
