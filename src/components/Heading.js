import React from "react"

export const Heading = ({ children, content, type, className }) => {
  //TODO: Why are padding, etc able to be overridden but things like color are not responsive?
  switch (type) {
    case "h1":
      return (
        <h1
          className={`${className} font-sans font-bold text-gray-90 leading-none tracking-tight text-6xl`}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        //TODO: It is medium on FeaturedClient and semibold on ClientList. Can we standardise this/put this in the typography?
        <h2
          className={`${className} font-sans font-bold text-gray-90 leading-none tracking-tight text-5xl`}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={`${className} font-sans font-bold text-gray-90 leading-none tracking-tight text-4xl`}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={`${className} font-sans font-bold text-gray-90 leading-tight tracking-tight text-2xl`}
        >
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={`${className} font-sans font-bold text-gray-90 leading-tight tracking-tight text-lg`}
        >
          {children}
        </h5>
      )
    case "h6":
      return (
        <h6
          className={`${className} font-sans font-bold text-gray-90 leading-snug tracking-wider text-sm`}
        >
          {children}
        </h6>
      )

    case "body-large":
      return (
        <p
          className={`${className} font-serif font-medium text-xl leading-snug text-gray-50 tracking-tight`}
        >
          {children}
        </p>
      )

    case "body-medium":
      return content ? (
        <p
          className={`${className} font-serif font-medium text-lg leading-relaxed text-gray-70 tracking-tight`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p
          className={`${className} font-serif font-medium text-lg leading-relaxed text-gray-70 tracking-tight`}
        >
          {children}
        </p>
      )

    //TODO: Add styles to target html tags specifically so that they look like this and make sense.
    //TODO: Those tags should not override the styles mentioned above, and should be overridable by other styles.
    //TODO: Also add hyperlink styles to this one
    /* This case is required to handle those blocks that come from WP Gutenberg.*/
    default:
      return <div dangerouslySetInnerHTML={{ __html: content }} />
  }
}
