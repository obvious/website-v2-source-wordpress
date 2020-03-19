import React from "react"
import { Link } from "gatsby"

export default ({ title, excerpt, date, author, slug }) => {
  return (
    <Link to={`articles/${slug}`}>
      <div className="bg-white p-6 mb-6 rounded-sm min-h-xs">
        <h3 className="font-sans text-2xl leading-tight font-semibold border-gray-300 border-b-2 pb-2">
          {title}
        </h3>
        { date && author &&
        <h4 className="text-xs border-gray-300 font-medium text-gray-600 py-3">
          <span className="uppercase font-sans">{date}</span>
          <span className="font-serif italic"> by </span>
          <span className="font-sans uppercase">{author}</span>
        </h4>
        }
        <div
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className="font-serif text-sm font-medium text-gray-800"
        ></div>
      </div>
    </Link>
  )
}
