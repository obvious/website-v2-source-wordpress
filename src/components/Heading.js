import React from "react"

//TODO: decouple `tag` from the html tag being used
export const Heading = ({ children, tag, type, className }) => {
  switch (type) {
    case "h1":
      return (
        <h1
          className={`${className} heading-default leading-none text-6xl`}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        //TODO: It is medium on FeaturedClient and semibold on ClientList. Can we standardise this/put this in the typography?
        <h2
          className={`${className} heading-default leading-none text-5xl`}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={`${className} heading-default leading-none text-4xl`}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={`${className} heading-default leading-tight text-2xl`}
        >
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={`${className} heading-default leading-tight text-lg`}
        >
          {children}
        </h5>
      )
    case "h6":
      return (
        <h6
          className={`${className} heading-default leading-snug tracking-wider text-sm`}
        >
          {children}
        </h6>
      )

    //TODO: Add styles to target html tags specifically so that they look like this and make sense.
    //TODO: Those tags should not override the styles mentioned above, and should be overridable by other styles.
    //TODO: Also add hyperlink styles to this one

    default:
      return <div>{console.log(children, type)}</div>
  }
}
