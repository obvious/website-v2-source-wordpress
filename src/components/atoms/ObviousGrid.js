import React from "react"

export const ObviousGridRow = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`${className} grid grid-cols-12 gap-4 row-gap-8`}
      {...props}
    >
      {children}
    </div>
  )
}

// export const ObviousGridColumnWithOffset = ({className = '', offsetClass, children,  ...props}) => {
//   return (<>
//     <div className={`${className}`} {...props}>
//       {children}
//     </div>
//     <span className={offsetClass} />
//   </>)
// }
