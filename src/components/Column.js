import React from "react"
import { getColSpan } from "../utils/column-utils"

export const Column = ({ width, children }) => {
  const columnSize = getColSpan(width)
  return (
    <div className={`${columnSize}`}>
      {children}
    </div>
  )
}
