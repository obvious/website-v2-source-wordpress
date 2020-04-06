import React from "react"

export default ({ image }) => {
  return (
    <div className="">
    <div className="relative inline-block self-start mb-12">
      <div className="bg-white relative p-2 z-40 shadow-md">
        <img className="min-w-sm max-w-sm min-h-md max-h-md " src={image} alt="" />
      </div>
      <div className="bg-white p-2 absolute w-full h-full inline-block -bottom-2 -right-2 z-20 shadow-md"></div>
      <div className="bg-white p-2 absolute w-full h-full -bottom-4 -right-4 z-10 shadow-md"></div>
    </div>
    </div>

  )
}
