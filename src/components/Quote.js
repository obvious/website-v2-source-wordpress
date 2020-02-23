import React from "react"

export default ({ children, author, bio }) => {
  return (
    <div>
      <p className="font-serif italic text-sm font-black">{children}</p>
      <div>
        <span className="text-xs text-black font-sans font-semibold">
          {author}
        </span>
        <span className="text-xs text-black font-sans font-medium">{bio}</span>
      </div>
    </div>
  )
}
