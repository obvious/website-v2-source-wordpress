import React from "react"
import { Link } from "gatsby"

import StackedImage from "./StackedImage"
import { Typography } from "./Typography"

export default ({ title, description, tags, coverImage, slug }) => {
  return (
    <Link to={`publications/${slug}`}>
      <div className="flex-col flex inline-flex">
        <StackedImage image={coverImage} />

        {tags.map(tag => (
          <span className="bg-yellow-400 rounded px-2 py-1 font-sans text-sm font-medium self-start">
            {tag}
          </span>
        ))}

        <Typography type="h4" className="self-start mt-2">
          {title}
        </Typography>
        <Typography type="body-medium" className="text-base self-start mt-2 " content={description} />
      </div>
    </Link>
  )
}
