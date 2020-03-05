import React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"


export function ArticleCarouselCard({ title, date }) {
  return (
    <Link className="rounded bg-hello w-2/5 mr-4 p-4 flex flex-col justify-between h-40">
      <h4 className="text-white font-sans font-semibold text-lg">{title}</h4>
      <span className="text-world font-sans uppercase tracking-wide font-semibold text-sm">
        {date}
      </span>
    </Link>
  )
}

export default ({ data }) => {
  const {
    WP: { page },
  } = data

  //TODO: function to order articles and filter for the lastest fifteen 

  return (
    <div className="flex py-4">
      <ArticleCarouselCard
        title="A day in the life of a Simple engineer"
        date="January 8, 2019"
      />
    </div>
  )
}

export const query = graphql`
    {
        WP {
            articles {
                edges {
                    node {
                        id
                        title
                        date
                    }
                }
            }
        }
    }`
