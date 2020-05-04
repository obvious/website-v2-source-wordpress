import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"
import { Byline } from "./Byline"

export default ({ iscasestudy, title, excerpt, date, author, slug }) => {
  let datePublished = new Date(date).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link to={iscasestudy ? `case-studies/${slug}` : `articles/${slug}`}>
      <div className="bg-white w-full p-6 mb-6 rounded-sm">
        {/*TODO: refactor once heading has been refactored to include tag-picking*/}
        <Heading className="text-gray-10 border-gray-300 border-b-2 pb-2" content={`<h4>${title}</h4>`} />
        { iscasestudy || <Byline date={datePublished} author={author} className="pt-3" isArticleCard />}
        {excerpt && <BodyText
          type="body-medium"
          className="text-light/gray-10 mt-4"
          content={excerpt}
        />}
      </div>
    </Link>
  )
}
