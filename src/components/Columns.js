import React from "react"
import { ObviousGridRow } from "./atoms/ObviousGrid"

export const Columns = ({ children }) => {
  return (
    <ObviousGridRow className="w-full">
      {children}
    </ObviousGridRow>
  )
}
