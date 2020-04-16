import {ArrowLeft} from "./Icon"
import IconButton from "./IconButton"
import ObviousLink from "./ObviousLink"
import React from "react"

const BackButton = ({children, to, className}) => {
  return (<ObviousLink url={to} className={`${className} flex items-center`}>
    <IconButton icon={<ArrowLeft className="text-orange-50 mr-6"/>}>
    </IconButton>
    <span className="text-gray-50">{children}</span>
  </ObviousLink>)
}

export default BackButton;