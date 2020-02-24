import React from "react"
import { Link } from "gatsby"

export function ArticleCarouselCard({ title, date }) {
  return (
    <Link className="rounded bg-hello w-2/5 mr-4 p-4 flex flex-col justify-between h-40">
      <h4 className="text-white font-sans font-semibold text-lg">{title}</h4>
      <span className="text-hello font-sans uppercase tracking-wide font-semibold text-sm">
        {date}
      </span>
    </Link>
  )
}

export default () => {
  return (
    <div className="flex py-4">
      <ArticleCarouselCard
        title="A day in the life of a Simple engineer"
        date="January 8, 2019"
      />
      <ArticleCarouselCard title="Rahul is cool" date="January 8, 2019" />
      <ArticleCarouselCard
        title="Pratul likes watches"
        date="January 8, 2019"
      />
      <ArticleCarouselCard
        title="I'll buy you cake if you can make Dhruv laugh out loud"
        date="January 8, 2019"
      />
    </div>
  )
}
