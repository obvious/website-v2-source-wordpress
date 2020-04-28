import React from "react"
import "../styles/Quote.css"

//TODO: Display separators above and below quote on mobile screens
export default ({ children, author, bio }) => {
  return (
    <div className="quote-container my-4 lg:my-10">
      <p className="font-serif font-extrabold text-xl text-grey-10 italic leading-relaxed" dangerouslySetInnerHTML={{__html: children}} />
      { (author || bio) && <div>
        {author && <span className="text-xs text-black font-sans font-semibold">
          {author}
        </span>}
        {bio && <span className="text-xs text-black font-sans font-medium">{bio}</span>}
      </div>}
    </div>
  )
}
