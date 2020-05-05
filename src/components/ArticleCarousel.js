import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import "../styles/swiper-custom.css"
import { ChevronLeft, ChevronRight } from "./atoms/Icon"
import IconButton from "./atoms/IconButton"
import { getDecodedHtml } from "../utils/text"

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      className="absolute flex items-center justify-center z-10 bg-gray-10 left-0 top-0 w-8 h-full custom-prev-arrow"
      onClick={onClick}
      icon={<ChevronLeft className="text-white" />}
    />
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      className="absolute flex items-center justify-center z-10 bg-gray-10 right-0 w-8 top-0 h-full custom-next-arrow"
      onClick={onClick}
      icon={<ChevronRight className="text-white" />}
    />
  )
}

export function ArticleCarouselCard({ slug, title, datePublished }) {
  let date = new Date(datePublished).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
  
  return (
    <Link
      to={`articles/${slug}`}
      className="rounded bg-white-a30 w-40 sm:w-64 p-4 flex flex-col justify-between h-full"
      activeClassName="border-rounded border-orange-50 border-2 active-card"
    >
      <Heading className="limit-lines-3" type="h5">
        {getDecodedHtml(title)}
      </Heading>
      <Heading
        type="h6"
        className="text-gray-50 font-sans uppercase tracking-wide font-semibold text-sm"
      >
        {date}
      </Heading>
    </Link>
  )
}

export default ({ articles, swiperProps }) => {
  const swiperSettings = {
    mousewheel: {
      forceToAxis: true,
      invert: true,
    },
    navigation: {
      nextEl: ".custom-next-arrow",
      prevEl: ".custom-prev-arrow",
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    slidesPerView: "auto",
    freeMode: true,
    ...swiperProps,
  }

  return (
    <Swiper
      {...swiperSettings}
      renderNextButton={() => <NextArrow />}
      renderPrevButton={() => <PrevArrow />}
    >
      {articles.map(({ slug, title, date }) => (
        <div className="swiper-slide">
          <ArticleCarouselCard slug={slug} title={title} datePublished={date} />
        </div>
      ))}
    </Swiper>
  )
}
