import React from "react"
import "../styles/quote.css"

//TODO: Display separators above and below quote on mobile screens
//Author has been dangerously set to account for the break in the citation value
// that accommodates both name and designation.
export default ({ children, author, bio }) => {
  return (
    <div className="quote-container my-4 lg:my-10">
      <p
        className="font-serif font-extrabold text-xl text-grey-10 italic leading-relaxed mb-8"
        dangerouslySetInnerHTML={{ __html: children }}
      />
      {(author || bio) && (
        <>
          {author && (
            <span
              className="text-xs text-black font-sans font-semibold"
              dangerouslySetInnerHTML={{ __html: author }}
            />
          )}
          {bio && (
            <span className="text-xs text-black font-sans font-medium">
              {bio}
            </span>
          )}
          </>
      )}
    </div>
  )
}
