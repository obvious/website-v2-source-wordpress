import React from "react"

export default ({ client, width, className }) => {
  if (width === "half") {
    return (
      <div className={`w-1/2 ${className}`}>
        <div className="rounded bg-bittersweet p-4 h-full">
          <h2 className="text-5xl font-sans font-medium">{client}</h2>
          <span className="font-sans text-7xl font-light tracking-tighter">
            100
          </span>
          <p className="font-serif tracking-tight font-medium text-xl leading-normal">
            Million Customers. First year. First app.
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="rounded bg-bittersweet p-4 w-full mt-2">
        <h2 className="text-5xl font-sans font-medium">{client}</h2>
        <p className="font-serif tracking-tight font-medium text-xl leading-normal">
          100 million customers. First app. First year.
        </p>
      </div>
    )
  }
}
