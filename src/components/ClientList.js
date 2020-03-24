import React from "react"
import { Heading } from "./Heading"

export default ({ listOfClientListBlocks }) => (
  <div className="container py-2 text-gray-500 flex flex-wrap items-start justify-between font-sans">
    {listOfClientListBlocks.map(({ clientlistblock }) => (
      <div className="w-1/3 my-4 mr-4">
        <Heading type="h5" className="border-b border-gray-500 py-2">
          {clientlistblock.title}
        </Heading>
        <ul className="mt-4">
          {clientlistblock.namelist.map(({ name }) => (
            <li className="font-semibold text-xs py-1">
              <Heading type="h5" className="text-gray-50 pb-2">{name}</Heading>
                </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)
