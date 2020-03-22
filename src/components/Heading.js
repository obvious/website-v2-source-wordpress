import React from "react"

export default ({content}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

/**
 * h1 classname="font-sans font-bold text-gray-90 leading-none tracking-tight text-6xl"
 * h2 classname="font-sans font-bold text-gray-90 leading-none tracking-tight text-5xl"
 * h3 classname="font-sans font-bold text-gray-90 leading-none tracking-tight text-4xl"
 * h4 classname="font-sans font-bold text-gray-90 leading-tight tracking-tight text-2xl"
 * h5 classname="font-sans font-bold text-gray-90 leading-tight tracking-tight text-lg"
 * h6 classname="font-sans font-bold text-gray-90 leading-snug tracking-wider text-sm"
 */
