import React from "react"
import { Heading } from "./Heading"

export default ({ listOfClientListBlocks }) => (
  <div className="text-gray-500 font-sans grid grid-flow-row col-gap-8 md:col-gap-0 row-gap-24 sm:grid-cols-2">
    {listOfClientListBlocks.map(({ clientlistblock }) => (
      <div className="md:w-2/3">
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
