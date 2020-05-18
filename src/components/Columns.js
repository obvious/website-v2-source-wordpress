import React from "react"
import { ObviousGridRow } from "./atoms/ObviousGrid"
import { assignComponent } from "../templates/article"

export const Columns = ({ block }) => {
  return (
    <ObviousGridRow className="w-full">
      {block.innerBlocks &&
        block.innerBlocks.map((innerBlock, index) => {
          return assignComponent(innerBlock, index)
        })}
    </ObviousGridRow>
  )
}
