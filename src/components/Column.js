import React from "react"
import { assignComponent } from "../templates/article"

export const Column = ({block, index}) => {
    const widthObject = {
      "33.33": "1/3",
      "66.66": "2/3",
      null: "1/2",
    }
    const columnWidth = block.columnattributes.width
    const width = widthObject[columnWidth];
    return (
      <div key={index} className={`article-column w-${width}`}>
        {block.innerBlocks &&
        block.innerBlocks.map((innerBlock, index) => {
          return assignComponent(innerBlock, index)
        })}
      </div>
    )
  }
