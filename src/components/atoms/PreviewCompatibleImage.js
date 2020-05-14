import GatsbyImage from "gatsby-image"
import React from "react"
import SVG from "react-inlinesvg"

const PreviewCompatibleImage = ({ image, className }) => {
  const extensionRegex = /(?:\.([^.]+))?$/
  const src = image.sourceUrl ? image.sourceUrl : image.attributes.url
  const extension = extensionRegex.exec(src)[1]
  if (image.imageFile && image.imageFile.childImageSharp) {
    if (image.imageFile.childImageSharp.fixed)
      return (
        <GatsbyImage
          className={className}
          fixed={image.imageFile.childImageSharp.fixed}
          alt="GI fixed"
        />
      )
    else
      return (
        <GatsbyImage
          className={className}
          fluid={image.imageFile.childImageSharp.fluid}
          alt="GI fluid"
        />
      )
  } else {
    if (extension === "svg") {
      // TODO - change this to use SVGR
      return <SVG className={className || ""} src={image.imageFile.publicURL} />
    } else
      return (
        <img className={className} src={src} alt="This is from svg else, PCI" />
      )
  }
}

export default PreviewCompatibleImage
