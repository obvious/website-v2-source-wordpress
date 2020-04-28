import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"
import { Byline } from "./Byline"

export default ({ title, excerpt, date, author, slug }) => {
  let datePublished = new Date(date).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link to={`articles/${slug}`}>
      <div className="bg-white w-full p-6 mb-6 rounded-sm">
        <Heading className="text-gray-10 border-gray-300 border-b-2 pb-2" content={`<h4>${title}</h4>`} />
        <Byline date={datePublished} author={author} className="pt-3" isArticleCard />
        {excerpt && <BodyText
          type="body-medium"
          className="text-light/gray-10 mt-4"
          content={excerpt}
        />}
      </div>
    </Link>
  )
}
