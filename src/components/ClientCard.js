import React from "react"
import classNames from "classnames"

export default ({ client, statistic, description, half, className }) => {
  return (
    <div
      className={classNames(
        `col-span-2`,
        half ? `sm:col-span-1` : `sm:col-span-2`,
        className
      )}
    >
      <div className="rounded bg-bittersweet p-4">
        <h2 className="font-sans text-4xl sm:text-5xl font-medium">{client}</h2>
        {statistic && (
          <span className="font-sans text-6xl sm:text-8 font-light tracking-tighter">
            {statistic}
          </span>
        )}
        <p className="font-serif tracking-tight font-medium text-xl leading-normal">
          {description}
        </p>
      </div>
    </div>
  )
}
