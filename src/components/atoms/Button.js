import RightArrow from "../icons/RightArrow"
import React from "react"
import Spinner from "./Spinner"

const Button = ({children, ...props}) => {
  return <button className="focus:outline-none border border-orange-50 text-orange-50 p-4 text-sm text-center w-full rounded font-sans flex justify-center items-center" {...props}>
    {props.loading && <Spinner className="mr-2 text-orange-50" />}
    {children}
    <RightArrow className="text-orange-50 fill-current px-2 h-3" />
  </button>
}

export default Button;