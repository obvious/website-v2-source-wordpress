import React from "react"
import { Link } from "gatsby"
import { Typography } from "./Typography"

export function ArticleCarouselCard({ slug, title, datePublished }) {
  let date = new Date(datePublished).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link
      to={`articles/${slug}`}
      className="rounded bg-white-a30 min-w-xxs mr-4 p-4 flex flex-col justify-between h-40"
    >
      <Typography type="h5">{title}</Typography>
      <Typography type="h6" className="text-gray-50 font-sans uppercase tracking-wide font-semibold text-sm">
        {date}
      </Typography>
    </Link>
  )
}

export default ({ articles }) => {
  return (
    <div className="flex py-8 overflow-x-scroll">
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
