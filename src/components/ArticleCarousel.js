import React, { useState } from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import "../styles/swiper-custom.css"
import { ChevronLeft, ChevronRight } from "./atoms/Icon"
import IconButton from "./atoms/IconButton"

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

export function ArticleCarouselCard({ slug, title, datePublished, swiper, slideKey }) {
  let date = new Date(datePublished).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
  
  return (
    <Link
      to={`articles/${slug}`}
      getProps={({isPartiallyCurrent}) => {
        isPartiallyCurrent && (swiper && swiper.slideTo(parseInt(slideKey.replace('slide-', ''))))
        
        const defaultClassName = 'rounded bg-white-a30 w-40 sm:w-64 p-4 flex flex-col justify-between h-full'
        return isPartiallyCurrent ? {
          className: `${defaultClassName} border-rounded border-orange-50 border-2 active-card`
        } : {
          className: defaultClassName
        }
      }}
    >
      <Heading className="limit-lines-3" type="h5">
        <span dangerouslySetInnerHTML={{ __html: title}} />
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
  const [swiper, updateSwiper] = useState(null)
  
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
    getSwiper: updateSwiper
  }
  
  return (
    <Swiper
      {...swiperSettings}
      renderNextButton={() => <NextArrow />}
      renderPrevButton={() => <PrevArrow />}
    >
      {articles.map(({ slug, title, date }, index) => {
        const key = `slide-${index}`
        return (
          <div className="swiper-slide" key={key}>
            <ArticleCarouselCard swiper={swiper} slideKey={key} slug={slug} title={title} datePublished={date} />
          </div>
        )}
      )}
    </Swiper>
  )
}
