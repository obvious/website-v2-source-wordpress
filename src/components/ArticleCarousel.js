import React from "react"
import { Link } from "gatsby"
import { Heading } from "./Heading"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import "../styles/swiper-custom.css";
import { ChevronLeft, ChevronRight } from './atoms/Icon'
import IconButton from "./atoms/IconButton"


const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      className="absolute flex items-center justify-center z-10 bg-gray-10 left-0 top-0 w-8 h-full custom-prev-arrow"
      onClick={onClick}
      icon={<ChevronLeft className="text-white"/>}
    />
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      className="absolute flex items-center justify-center z-10 bg-gray-10 right-0 w-8 top-0 h-full custom-next-arrow"
      onClick={onClick}
      icon={<ChevronRight className="text-white"/>}
    />
  )
}

export function ArticleCarouselCard({ slug, title, datePublished }) {
  let date = new Date(datePublished).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'});
  return (
    <Link
      to={`articles/${slug}`}
      className="rounded bg-white-a30 w-64 p-4 flex flex-col justify-between h-full"
    >
      <Heading type="h5">{title}</Heading>
      <Heading type="h6" className="text-gray-50 font-sans uppercase tracking-wide font-semibold text-sm">
        {date}
      </Heading>
    </Link>
  )
}

export default ({ articles }) => {
  
  const swiperSettings = {
    mousewheel: {
      forceToAxis: true,
      invert: true
    },
    shouldSwiperUpdate: true,
    navigation: {
      nextEl: '.custom-next-arrow',
      prevEl: '.custom-prev-arrow'
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    freeMode: true,
    breakpoints: {
      640: {
        slidesPerGroup: 1
      },
      768: {
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerGroup: 2,
      }
    }
  }
  
  return (
    <Swiper
      {...swiperSettings}
      renderNextButton={() => <NextArrow/>}
      renderPrevButton={() => <PrevArrow/>}
    >
      {articles.map(({ slug, title, date }) => (
        <div className="swiper-slide">
          <ArticleCarouselCard
            slug={slug}
            title={title}
            datePublished={date}
          />
        </div>
      ))}
    </Swiper>
  )
}
