import RightArrow from "../icons/RightArrow"
import React from "react"
import Spinner from "./Spinner"

const Button = ({children, color, textSize, className,  ...props}) => {
  return <button className={`${className || ''} focus:outline-none border border-${color || 'orange-50'} text-${color || 'orange-50'} p-4 text-${textSize || 'sm'} text-center w-full rounded font-sans flex justify-center items-center`} {...props}>
    {props.loading && <Spinner className={`mr-2 text-${color || 'orange-50'}`} />}
    {children}
    <RightArrow className={`text-${color || 'orange-50'} fill-current px-2 h-3`} />
  </button>
}

export default Button;