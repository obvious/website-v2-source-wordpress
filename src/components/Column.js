import React from "react"
import { getColSpan } from "../utils/column-utils"
import { assignComponent } from "../templates/article"

export const Column = ({ block }) => {
  // Another assumption this piece of code relies on, is that there will only
  // be two columns! This should be implemented using the `columns` attribute
  // on the WP_CORE_COLUMNS block
  const columnWidth = block.columnattributes.width
  const columnSize = getColSpan(columnWidth)
  return (
    <div className={`${columnSize}`}>
      {block.innerBlocks &&
        block.innerBlocks.map((innerBlock, index) => {
          return assignComponent(innerBlock, index)
        })}
    </div>
  )
}
