import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export function ArticleCarouselCard({ slug, title, datePublished }) {
  let date = new Date(datePublished).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link
      to={`articles/${slug}`}
      className="rounded bg-white-a30 min-w-3xs mr-4 p-4 flex flex-col justify-between h-40 last:bg-gradient"
    >
      <Heading type="h5">{title}</Heading>
      <Heading type="h6" className="text-gray-50 font-sans uppercase tracking-wide font-semibold text-sm">
        {date}
      </Heading>
    </Link>
  )
}

export default ({ articles }) => {

  const settings = {
    infinite: false,
    draggable: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 3,
  }

  return (
    <Slider
   {...settings}
      className="flex py-8 overflow-x-scroll">
      {articles.map(({ slug, title, date }) => (
        <ArticleCarouselCard
          slug={slug}
          title={title}
          datePublished={date}
        />
      ))}
    </Slider>
  )
}
