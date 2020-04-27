import React from "react"

export const ObviousGridRow = ({className = '', children,  ...props}) => {
  return (<div className={`${className} grid grid-flow-col grid-cols-12 gap-4 row-gap-8`} {...props}>
    {children}
  </div>)
}

// export const ObviousGridColumn = ({className = '', start = 1, end = 12, children,  ...props}) => {
//   return (<div className={`${className} col-start-${start} col-end-${end}`} {...props}>
//     {children}
//   </div>)
// }