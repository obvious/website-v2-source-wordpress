import React from "react"

export default ({ image }) => {
  return (
    <div className="">
    <div className="relative inline-block self-start mb-12">
      <div className="bg-white relative p-2 z-40 shadow-md">
        <img className="min-w-2xs lg:min-w-sm max-w-2xs lg:max-w-sm min-h-sm lg:min-h-md max-h-sm lg:max-h-md " src={image} alt="" />
      </div>
      <div className="bg-white p-2 absolute w-full h-full inline-block -bottom-2 -right-2 z-20 shadow-md"></div>
      <div className="bg-white p-2 absolute w-full h-full -bottom-4 -right-4 z-10 shadow-md"></div>
    </div>
    </div>

  )
}
