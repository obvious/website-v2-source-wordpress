import React from "react"
import { getColSpan } from "../utils/column-utils"
import { assignComponent } from "../templates/article"

export const Column = ({ block }) => {
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
