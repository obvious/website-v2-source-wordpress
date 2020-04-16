import {ArrowLeft} from "./Icon"
import IconButton from "./IconButton"
import ObviousLink from "./ObviousLink"
import React from "react"

const BackButton = ({children, to, className, customIcon}) => {
  return (
    <div className="relative grid grid-flow-col w-full gap-4" style={{'justify-content': 'start'}}>
      {to && <ObviousLink url={to} className={`${className} z-40 absolute top-0 left-0 right-0 bottom-0 flex items-center`}/>}
      {customIcon ?
        <span>{customIcon}</span> :
        <IconButton icon={<ArrowLeft className="text-orange-50"/>}>
        </IconButton>
      }
      <span className="text-gray-50 limit-lines-2" style={{'align-self': 'center'}}>{children}</span>
    </div>)
}

export default BackButton;