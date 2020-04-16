import React from "react"
import PreviewCompatibleImage from "./atoms/PreviewCompatibleImage"

export default ({ image }) => {
  return (
    <div className="pr-4 pb-2 mb-10">
      <div className="relative self-start">
        <div className="bg-white relative p-2 z-30 shadow-md">
          <div className="relative min-h-sm lg:min-h-md max-h-sm lg:max-h-md">
            <PreviewCompatibleImage image={image} />
          </div>
        </div>
        <div className="bg-white p-2 absolute w-full h-full inline-block -bottom-2 -right-2 z-20 shadow-md"></div>
        <div className="bg-white p-2 absolute w-full h-full -bottom-4 -right-4 z-10 shadow-md"></div>
      </div>
    </div>
  
  )
}
