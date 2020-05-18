import React from "react"
import { assignComponent } from "../templates/article"

export const Column = ({ block, index }) => {
  //This value comes from Gutenberg as an object. On the Gutenberg editor,
  // this is a slidable control, which means that any value that comes from it
  // must be translated to an appropriate col-span length and implemented. It
  // probably makes more sense to write a small utility to do this.
  // Another assumption this piece of code relies on, is that there will only
  // be two columns! This should be implemented using the `columns` attribute
  // on the WP_CORE_COLUMNS block
  const widthObject = {
    "33.33": "col-span-12 md:col-span-4 md:odd:col-start-1 md:even:col-start-9",
    "66.66": "col-span-12 md:col-span-8 md:odd:col-start-1 md:even:col-start-5",
    null: "col-span-12 md:col-span-6 md:odd:col-start-1 md:even:col-start-7",
  }
  const columnWidth = block.columnattributes.width
  const columnSize = widthObject[columnWidth]
  return (
    <div key={index} className={`${columnSize}`}>
      {block.innerBlocks &&
        block.innerBlocks.map((innerBlock, index) => {
          return assignComponent(innerBlock, index)
        })}
    </div>
  )
}
