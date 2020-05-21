import GatsbyImage from "gatsby-image"
import React from "react"
import SVG from "react-inlinesvg"
import "../../styles/Image.css"

const PreviewCompatibleImage = ({ image, className }) => {
  const extensionRegex = /(?:\.([^.]+))?$/
  const src = image.sourceUrl ? image.sourceUrl : image.attributes.url
  const extension = extensionRegex.exec(src)[1]
  //TODO: filter out gifs
  if (image.imageFile && image.imageFile.childImageSharp) {
    if (image.imageFile.childImageSharp.fixed)
      return (
        <>
          <GatsbyImage
            className={className}
            fixed={image.imageFile.childImageSharp.fixed}
            alt=""
          />
          {image.attributes && image.attributes.caption && (
            <figcaption>{image.attributes.caption}</figcaption>
          )}
        </>
      )
    else
      return (
        <>
          <GatsbyImage
            className={className}
            fluid={image.imageFile.childImageSharp.fluid}
            alt=""
          />
          {image.attributes && image.attributes.caption && (
            <figcaption>{image.attributes.caption}</figcaption>
          )}
        </>
      )
  } else {
    if (extension === "svg") {
      // TODO - change this to use SVGR
      return <SVG className={className || ""} src={image.imageFile.publicURL} />
    } else return <img className={className} src={src} alt="" />
  }
}

export default PreviewCompatibleImage
