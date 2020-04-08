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
      className="rounded bg-white-a30 w-64 mr-4 p-4 flex flex-col justify-between h-40"
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
    variableWidth: true,
    slidesToScroll: 3,
    nextArrow: <Arrow/>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToScroll: 1
        }
      }
    ]

  }

  return (
    <Slider
   {...settings}
      className="flex py-8">
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
