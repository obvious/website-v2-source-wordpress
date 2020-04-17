import React from "react"

/**
 * A note on text-{color}: The specificity of text-color is determined not by
 * the order of declaration of the utility class in the className (as one might
 * expect) but in the order of declaration of 'color' within tailwind.config.js.
 * Therefore, the default text colors as given here have the lowest specificity,
 * and all other colors can be overridden at time of usage.
 */


//TODO: decouple `tag` from the html tag being used
export const Heading = ({ children, tag, type, className }) => {
  
  /* Default class applied to all components in Heading to avoid repetition */
  const baseClass = "font-sans text-gray-90 tracking-tight"

  switch (type) {
    case "h1":
      return (
        <h1
          className={`${baseClass} ${className} text-8xl font-bold lg:text-9xl leading-none`}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        //TODO: It is medium on FeaturedClient, semibold on ClientList, and normal on the design system. Can we standardise this/put this in the typography?
        <h2
          className={`${baseClass} ${className} text-7xl font-medium lg:text-8xl leading-tight lg:leading-none`}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={`${baseClass} ${className} text-4xl font-bold lg:text-5xl leading-8 lg:leading-none`}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={`${baseClass} ${className} text-2xl font-bold leading-6 font-bold`}
        >
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={`${baseClass} ${className} text-lg font-bold leading-5`}
        >
          {children}
        </h5>
      )
    case "h6":
      return (
        <h6
          className={`${baseClass} ${className} text-sm font-bold leading-5 tracking-wider uppercase`}
        >
          {children}
        </h6>
      )

    //TODO: Add styles to target html tags specifically so that they look like this and make sense.
    //TODO: Those tags should not override the styles mentioned above, and should be overridable by other styles.
    //TODO: Also add hyperlink styles to this one

    default:
      return <div>{children}</div>
  }
}
