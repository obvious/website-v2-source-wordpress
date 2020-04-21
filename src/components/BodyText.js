import React from "react"
import "../styles/BodyText.css"

export const BodyText = ({ children, className, content, type }) => {
  switch (type) {
    case "body-large":
      return content ? (
        <p
          className={`${className} font-serif font-medium text-2xl leading-snug text-gray-50 tracking-tight`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p
          className={`${className} font-serif font-medium text-2xl leading-snug text-gray-50 tracking-tight`}
        >
          {children}
        </p>
      )

    case "body-medium":
      return content ? (
        <p
          className={`${className} font-serif text-base lg:text-lg leading-relaxed text-gray-70 tracking-tight`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p
          className={`${className} font-serif text-base lg:text-lg leading-relaxed text-gray-70 tracking-tight`}
        >
          {children}
        </p>
      )

    case "subtitle-medium":
      return content ? (
        <p
          className={`${className} font-sans font-medium text-2xl leading-snug text-gray-50 tracking-tight`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p
          className={`${className} font-sans font-medium text-2xl leading-snug text-gray-50 tracking-tight`}
        >
          {children}
        </p>
      )

    case "credit":
      return (
        <span
          className={`${className} font-serif font-bold italic text-sm leading-snug text-light/gray-30`}
        >
          {children}
        </span>
      )

    /* This case is required to handle those blocks that come from WP Gutenberg that we haven't defined yet..*/
    default:
      return <div dangerouslySetInnerHTML={{ __html: content }} />
  }
}
