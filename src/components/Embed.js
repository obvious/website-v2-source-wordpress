import React from "react"
import "../styles/embed.css"

export const Embed = ({ embed, className, aspectRatio = "16/9" }) => {
  if (embed.embedattributes.providerNameSlug == "youtube") {
    const embed_id = embed.embedattributes.url.split("v=")[1].split("&")[0]
    const src = "https://youtube.com/embed/" + embed_id
    // const style = { "--aspect-ratio": aspectRatio }; as React.CSSProperties;

    return (
      <div
        className={` ${className} embed-wrapper relative h-auto`}
      >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        allow="fullscreen"
        title={`${embed.embedattributes.providerNameSlug} ${embed.embedattributes.type}`}
        src={src}
        strict-origin-when-cross-origin
      ></iframe>
      </div>
    )
  }
  return console.error("unsupported embed type")
}
