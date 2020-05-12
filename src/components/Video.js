import React from "react"
import { Figcaption } from "./Figcaption"

//TODO: confirm exact video playback behavior with design
export const Video = ({ video, className, aspectRatio = "16/9" }) => {
  const extensionRegex = /(?:\.([^.]+))?$/

  const src = video.videoattributes.src
  const extension = extensionRegex.exec(src)[1]

  // const style = { "--aspect-ratio": aspectRatio } as React.CSSProperties;
  return (
    <div
      className={`${className} relative h-0 aspect-ratio-16/9`}
      // style={style}
    >
      <video
        controls={video.videoattributes.controls}
        className="w-full h-auto"
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
    </div>
  )
}
