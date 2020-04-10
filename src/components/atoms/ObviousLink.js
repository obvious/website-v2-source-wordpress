import React from "react"
import { Link } from "gatsby"

const ObviousLink = ({children, url, openInSameTab, ...props}) => {
  return (<>
    {
      url.indexOf('http') > -1 ?
      <a href={url} target={openInSameTab ? '_self' : '_blank'} {...props}>{children}</a>
      :
      <Link to={url} {...props}>{children}</Link>
    }
  </>)
}

export default ObviousLink;