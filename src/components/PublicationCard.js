import React from "react"
import { Link } from "gatsby"

import StackedImage from "./StackedImage"

const kebabcase = require(`lodash.kebabcase`)

export default ({ title, description, tags, coverImage }) => {
  return (
    <Link className="w-2/5" to={`publications/${kebabcase(title)}`}>
      <div className="flex-col flex inline-flex">
        <StackedImage image={coverImage} />

        {tags.map(tag => (
          <span className="bg-yellow-400 rounded px-2 py-1 font-sans text-sm font-medium self-start">
            {tag}
          </span>
        ))}

        <span className="font-sans text-xl text-white font-semibold self-start mt-2">
          {title}
        </span>
        <p className="font-serif text-white text-base self-start mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}
