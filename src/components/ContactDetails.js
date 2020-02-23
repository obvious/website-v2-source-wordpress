import React from "react"

export default ({ clients, category }) => {
  return (
    <div className="w-2/6 ml-auto">
      <div>
        <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
          Careers
        </span>
        <p className="py-2 text-xs font-serif">
          See open positions or send in a general application.
        </p>
        <a
          className="text-xs text-bittersweet font-sans"
          href="https://jobs.obvious.in/"
        >
          Apply
        </a>
      </div>
      <div>
        <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
          Email
        </span>
        <a href="mailto:hello@obvious.in" className="py-2 text-xs font-serif">
          hello@obvious.in
        </a>
      </div>
      <div>
        <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
          Call
        </span>
        <a href="tel:+91 80 2919 92919" className="py-2 text-xs font-serif">
          +91 80 2919 92919
        </a>
      </div>
      <div>
        <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
          Visit Us
        </span>
        <p className="py-2 text-xs font-serif">
          Level 2, Raheja Paramount
          <br />
          138 Residency Road
          <br />
          Bengaluru 560025
        </p>
        <a
          className="text-xs text-bittersweet font-sans"
          href="https://g.page/obvious-hq"
        >
          See on Google Maps
        </a>
      </div>
    </div>
  )
}
