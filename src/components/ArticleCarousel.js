import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import RightChevron from "./icons/RightChevron"
import LeftChevron from "./icons/LeftChevron"

const RightArrow = (props) => {
  const {className, onClick } = props
  return (
    <button
      type="button"
      className={`${className}`}
      onClick={onClick}
    >
      <RightChevron className={`${className} slick-arrow slick-next`}/>
    </button>
  )
}

const LeftArrow = (props) => {
  const {className, onClick } = props
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      <LeftChevron className={`${className} slick-arrow slick-next`}/>
    </button>
  )
}

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
    slidesToScroll: 2,
    nextArrow: <RightArrow/>,
    prevArrow: <LeftArrow/>,
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
    <div className="relative">
    <div className="flex flex-row justify-between absolute w-full py-8">
      <div className="z-10 w-16 h-40 bg-gradient-left"></div>
      <div className="z-10 w-16 h-40 bg-gradient-right"></div>
    </div>
    <Slider
   {...settings}
      className="py-8 z-auto">
      {articles.map(({ slug, title, date }) => (
        <ArticleCarouselCard
          slug={slug}
          title={title}
          datePublished={date}
        />
      ))}
    </Slider>
    </div>
  )
}
