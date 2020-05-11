import React from "react"
import { BodyText } from "./BodyText"

export const Video = ({ video, className }) => {
  const extensionRegex = /(?:\.([^.]+))?$/

  const controls = video.videoattributes.controls
  const src = video.videoattributes.src
  const extension = extensionRegex.exec(src)[1]
  return (
    <>
      <video controls={controls} className={className}>
        <source src={src} type={`video/${extension}`} />
      </video>
    </>
  )
}
