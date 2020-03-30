import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"

export default ({ title, excerpt, date, author, slug }) => {
  let datePublished = new Date(date).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link to={`articles/${slug}`}>
      <div className="bg-white min-w-xl p-6 mb-6 rounded-sm min-h-sm">
        <Heading type="h4" className="text-gray-10 border-gray-300 border-b-2 pb-2">
          {title}
        </Heading>
        { datePublished && author &&
        <Heading type="h6" className="text-light/gray-30 border-gray-300 py-3">
          <span>{datePublished}</span>
          <span className="font-serif italic lowercase"> by </span>
          <span>{author}</span>
        </Heading>
        }
        <BodyText type="body-medium" content={excerpt} className="text-light/gray-10 mt-3" />
      </div>
    </Link>
  )
}
