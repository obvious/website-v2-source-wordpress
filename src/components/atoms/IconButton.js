import React from "react"
import Spinner from "./Spinner"

const IconButton = ({icon, className, loading,  ...props}) => {
  return (<button className={`focus:outline-none ${className}`} {...props}>
    {props.loading && <Spinner className={`mr-2`} />}
    {icon}
  </button>)
}

export default IconButton;