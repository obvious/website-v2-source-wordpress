import React, { useState } from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import RightChevron from "./icons/RightChevron"
import LeftChevron from "./icons/LeftChevron"

const LeftArrow = ({className, onClick, currentSlide, setIsLeftShown}) => {
  if (currentSlide != 0) {
    setIsLeftShown(true)
    return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      <LeftChevron className={`${className} slick-arrow slick-next`}/>
    </button>
  ) }
  else {
    setIsLeftShown(false)
    return null
  }
}

const RightArrow = ({ className, onClick, currentSlide, setIsRightShown, slideCount}) => {
  if (currentSlide === slideCount || currentSlide+1 === slideCount)
  {
    setIsRightShown(false)
    return null

  } else {
    setIsRightShown(true)
    return (<button
      type="button"
      className={className}
      onClick={onClick}
    >
      <RightChevron className={`${className} slick-arrow slick-next`}/>
    </button>)
  }
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
  let [isLeftShown, setIsLeftShown] = useState(false);
  let [isRightShown, setIsRightShown] = useState(true);
  let [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: false,
    draggable: true,
    swipeToSlide: true,
    variableWidth: true,
    slidesToScroll: 2,
    beforeChange: (currentSlide, nextSlide) => {
      setIsLeftShown(true)
    },
    afterChange: (curr) => {
      setCurrentSlide(curr)
    },
    prevArrow: <LeftArrow currentSlide={currentSlide} setIsLeftShown={setIsLeftShown}/>,
    nextArrow: <RightArrow currentSlide={currentSlide} setIsRightShown={setIsRightShown}/>,
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
    <div className="flex flex-row justify-between absolute w-full h-full py-8">
      {isLeftShown ? <div className="z-10 w-8 lg:w-16 bg-gradient-left" /> : <div className="z-10 w-8 lg:w-16" />}
      {isRightShown ? <div className="z-10 w-8 lg:w-16 bg-gradient-right" /> : <div className="z-10 w-8 lg:w-16" />}
    </div>
    <Slider
   {...settings}
      className="py-8 h-52 z-auto">
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
