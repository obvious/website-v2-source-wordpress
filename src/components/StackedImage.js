import React from "react"

export default ({ image }) => {
  return (
    <div className="relative inline-block self-start mb-10">
      <div className="bg-white relative p-2 z-40 shadow-md">
        <img src={image} alt="" />
      </div>
      <div className="bg-white p-2 absolute w-full h-full inline-block -bottom-2 -right-2 z-20 shadow-md"></div>
      <div className="bg-white p-2 absolute w-full h-full -bottom-4 -right-4 z-10 shadow-md"></div>
    </div>
  )
}
