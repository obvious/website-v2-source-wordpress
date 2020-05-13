import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"
import { Byline } from "./Byline"

export default ({ iscasestudy, title, excerpt, date, author, slug }) => {
  let datePublished = new Date(date).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link to={iscasestudy ? `case-studies/${slug}` : `articles/${slug}`}>
      <div className="bg-white w-full p-8 mb-8 rounded-sm">
        {/*TODO: refactor once heading has been refactored to include tag-picking*/}
        <Heading className="text-gray-10 border-light/gray-50 border-b-2 pb-4 mb-4" content={`<h4>${title}</h4>`} />
        { iscasestudy || <Byline date={datePublished} author={author} className="mb-7" isArticleCard />}
        {/*Excerpt must always exist - see NUWEB-99*/}
        {excerpt && <BodyText
          type="body-medium"
          className="text-light/gray-10"
          content={excerpt}
        />}
      </div>
    </Link>
  )
}
