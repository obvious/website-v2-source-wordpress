import React from "react"

export const Embed = ({ embed, className, aspectRatio = "16/9" }) => {
  if (embed.embedattributes.providerNameSlug == "youtube") {
    const embed_id = embed.embedattributes.url.split("v=")[1].split("&")[0]
    const src = "https://youtube.com/embed/" + embed_id

    return (
      <iframe
        allow="fullscreen"
        title={`${embed.embedattributes.providerNameSlug} ${embed.embedattributes.type}`}
        src={src}
        strict-origin-when-cross-origin
      ></iframe>
    )
  }
  return console.error("unsupported embed type")
}
