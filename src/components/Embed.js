import React from "react"
import { Figcaption } from "./Figcaption"

export const Embed = ({ embed, className, aspectRatio = "16/9" }) => {
  let src = embed.embedattributes.url
  // const style = { "--aspect-ratio": aspectRatio }; as React.CSSProperties;

  if (embed.embedattributes.providerNameSlug == "youtube") {
    const embed_id = embed.embedattributes.url.split("v=")[1].split("&")[0]
    src = "https://youtube.com/embed/" + embed_id
  }

  return (
    <div className={` ${className} relative h-0 aspect-ratio-16/9`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        allow="fullscreen"
        title={`${embed.embedattributes.providerNameSlug} ${embed.embedattributes.type}`}
        src={src}
        strict-origin-when-cross-origin
      ></iframe>
      {embed.embedattributes.caption && (
        <Figcaption>{embed.embedattributes.caption}</Figcaption>
      )}
    </div>
  )
}
