import React from "react"
import { Link } from "gatsby"

import StackedImage from "./StackedImage"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"

export default ({ title, description, tags, coverImage, slug }) => {
  return (
    <Link to={`publications/${slug}`}>
      <div className="grid grid-flow-row mb-18 lg:mb-32">
        <div className="mb-10"><StackedImage image={coverImage} /></div>
        {tags.map(tag => (
          <span className="bg-yellow-400 rounded px-2 py-1 font-sans text-sm font-medium self-start">
            {tag}
          </span>
        ))}
        
        <Heading type="h4" className="self-start mt-2">
          {title}
        </Heading>
        <BodyText type="body-medium" className="text-base self-start mt-2" content={description} />
      </div>
    </Link>
  )
}
