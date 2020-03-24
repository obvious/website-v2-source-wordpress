import React from "react"
import classNames from "classnames"

import RightArrow from "./icons/RightArrow"

export default ({ client, statistic, description, fullWidth, className }) => {
  return (
    <div
      className={classNames(
        `col-span-2`,
        fullWidth ? `sm:col-span-2` : `sm:col-span-1`,
        className
      )}
    >
      <div className={classNames("rounded bg-orange-50 p-8 flex flex-col justify-between", statistic ? `min-h-xs` : `min-h-xss`)}>
        <div className="flex flex-row items-baseline justify-between">
          <h2 className="font-sans font-medium text-gray-10 leading-none tracking-tight text-5xl">
            {client}
          </h2>
          <RightArrow className="h-8" />
        </div>
        <div className="flex flex-col justify-end">
          {statistic && (
            <span className="font-sans text-6xl font-light tracking-tighter">
              {statistic}
            </span>
          )}
          <p className="font-serif tracking-tight font-medium text-xl leading-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
