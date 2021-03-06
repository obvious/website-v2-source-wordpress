import React from "react"
import { Link } from "gatsby"

const ObviousLink = ({children, url, openInSameTab, activeClassName, ...props}) => {
  if(!url) {
    return <span {...props}>{children}</span>
  }
  else return (<>
    {
      url.indexOf('http') > -1 ?
      <a href={url} target={openInSameTab ? '_self' : '_blank'} {...props}>{children}</a>
      :
      <Link to={url} activeClassName={activeClassName} {...props}>{children}</Link>
    }
  </>)
}

export default ObviousLink;