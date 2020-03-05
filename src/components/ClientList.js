import React from "react"

export default ({ listOfClientListBlocks }) => (
  <div className="container py-2 text-gray-500 flex flex-wrap items-start justify-between font-sans">
    {listOfClientListBlocks.map(({ clientlistblock }) => (
      <div className="w-1/3 my-4 mr-4">
        <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
          {clientlistblock.title}
        </h2>
        <ul className="mt-4">
          {clientlistblock.namelist.map(({ name }) => (
            <li className="font-semibold text-xs py-1">{name}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)
