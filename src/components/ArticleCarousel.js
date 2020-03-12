import React from "react"
import { Link } from "gatsby"

export function ArticleCarouselCard({ slug, title, datePublished }) {
  let date = new Date(datePublished).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link
      to={`articles/${slug}`}
      className="rounded bg-hello w-2/5 mr-4 p-4 flex flex-col justify-between h-40"
    >
      <h4 className="text-white font-sans font-semibold text-lg">{title}</h4>
      <span className="text-light-gray-50 font-sans uppercase tracking-wide font-semibold text-sm">
        {date}
      </span>
    </Link>
  )
}

export default ({ articles }) => {
  return (
    <div className="flex py-4">
      {articles.map(({ slug, title, date }) => (
        <ArticleCarouselCard
          slug={slug}
          title={title}
          datePublished={date}
        />
      ))}
    </div>
  )
}
