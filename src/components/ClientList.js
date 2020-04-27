import React from "react"
import { Heading } from "./Heading"

export default ({ listOfClientListBlocks }) => (
  <>
    {listOfClientListBlocks.map(({ clientlistblock }) => (
      <div className={`text-gray-500 font-sans col-span-12 md:col-span-4 sm:col-span-5 sm:odd:col-start-1 md:odd:col-start-1 sm:even:col-start-7 md:even:col-start-7`}>
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
  </>
)
