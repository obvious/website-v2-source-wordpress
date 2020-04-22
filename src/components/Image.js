import React from "react"
import "../styles/Image.css"

export default ({content, className}) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{__html: content}} />
  )
}