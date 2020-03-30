import React from "react"

export const BodyText = ({ children, className, content, type }) => {
  switch (type) {
    case "body-large":
      return content ? (
        <p
          className={`${className} font-serif font-medium text-xl leading-snug text-gray-50 tracking-tight`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p
          className={`${className} font-serif font-medium text-xl leading-snug text-gray-50 tracking-tight`}
        >
          {children}
        </p>
      )

    case "body-medium":
      return content ? (
        <p
          className={`${className} font-serif font-medium text-lg sm:text-base leading-loose sm:leading-relaxed text-gray-70 tracking-tight`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p
          className={`${className} font-serif font-medium text-lg leading-relaxed text-gray-70 tracking-tight`}
        >
          {children}
        </p>
      )

    case "credit":
      return <span className={`${className} font-serif font-bold italic text-sm leading-snug text-light/gray-30`} >{children}</span>

    /* This case is required to handle those blocks that come from WP Gutenberg.*/
    default:
      return <div dangerouslySetInnerHTML={{ __html: content }} />
  }
}
