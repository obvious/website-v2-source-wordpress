import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"
import { Byline } from "./Byline"

export default ({ title, excerpt, date, author, slug }) => {
  let datePublished = new Date(date).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link to={`articles/${slug}`}>
      <div className="bg-white w-full p-6 mb-6 rounded-sm min-h-sm">
        <Heading type="h4" className="text-gray-10 border-gray-300 border-b-2 pb-2">
          {title}
        </Heading>
        <Byline date={datePublished} author={author} className="py-3" isArticleCard />
        <BodyText type="body-medium" content={excerpt} className="text-light/gray-10 mt-3" />
      </div>
    </Link>
  )
}
