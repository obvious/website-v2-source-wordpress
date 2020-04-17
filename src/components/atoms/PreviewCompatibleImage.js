import GatsbyImage from "gatsby-image"
import React from "react"
import SVG from 'react-inlinesvg';


const PreviewCompatibleImage = ({ image, className }) => {
  const extensionRegex = /(?:\.([^.]+))?$/;
  
  const extension = extensionRegex.exec(image.sourceUrl)[1]
  if(!image.imageFile || !image.imageFile.childImageSharp) {
    if(extension === 'svg') {
      // TODO - change this to use SVGR
      return <SVG className={className || ''} src={image.imageFile.publicURL} />
    }
    else
      return <img className={className} src={image.sourceUrl} alt="" />
  }
  else {
    const childImageSharp = image.imageFile.childImageSharp.fixed
    return <GatsbyImage className={className} fixed={childImageSharp} alt="" />
  }
}

export default PreviewCompatibleImage