import React from "react"
import { Figcaption } from "./Figcaption"

//TODO: confirm exact behavior with design
export const Video = ({ video, className }) => {
  const extensionRegex = /(?:\.([^.]+))?$/

  const src = video.videoattributes.src
  const extension = extensionRegex.exec(src)[1]
  return (
    <>
      <video
        controls={video.videoattributes.controls}
        className={className}
        preload={video.videoattributes.preload}
        loop={video.videoattributes.loop}
        muted={video.videoattributes.muted}
        playsInline={video.videoattributes.playsInline}
      >
        <source src={src} type={`video/${extension}`} />
      </video>
      {video.videoattributes.caption && (
        <Figcaption>{video.videoattributes.caption}</Figcaption>
      )}
    </>
  )
}
