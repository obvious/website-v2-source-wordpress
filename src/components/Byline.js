import React from "react"
import { Heading } from "./Heading"
import classNames from "classnames"

export const Byline = ({ date, author, className, isArticleCard }) => {
  const dateClassName = classNames(isArticleCard ? `text-light/gray-30` : `text-light/gray-10`)
  const authorClassName = classNames(isArticleCard ? `text-light/gray-30` : `text-orange-50`)
  return (
  <Heading type="h6" className={`${className} text-light/gray-30 border-gray-300`}>
    <span className={dateClassName}>{date}</span>
    <span className="font-serif italic lowercase font-bold"> by </span>
    <span className={authorClassName}>{author}</span>
  </Heading>
    )
}
