import React from "react"
import "../styles/Image.css"

export default ({className, src}) => {
  return (
    <img className={className} src={src} alt=""/>
  )
}