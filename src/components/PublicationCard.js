import React from "react"
import { Link } from "gatsby"

import StackedImage from "./StackedImage"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"

import Tag from "./atoms/Tag"

export default ({ title, description, tags, coverImage, slug }) => {
  return (
    <Link to={`publications/${slug}`}>
      <div className="grid grid-flow-row mb-18 lg:mb-32">
        <div className="mb-10">
          <StackedImage image={coverImage} />
        </div>
        {tags.length ? (
          <div className="grid gap-4 grid-flow-col justify-start mb-4">
            {tags.map((tag, index) => (
              <Tag key={index} tagType={tag.type}>{tag.text}</Tag>
            ))}
          </div>
        ) : null}

        <Heading type="h4" className="self-start mt-2">
          {title}
        </Heading>
        <BodyText
          type="body-medium"
          className="text-base self-start mt-2"
          content={description}
        />
      </div>
    </Link>
  )
}
