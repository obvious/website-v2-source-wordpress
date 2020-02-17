import React from "react"
import { Link } from "gatsby"

import SiteHeader from "../components/SiteHeader"

export default () => (
  <div className="flex flex-col justify-start antialiased bg-logCabin min-h-screen">
    <SiteHeader />
    <main className="container px-20">
      <h1 className="text-4xl py-10 text-gray-200 leading-tight font-semibold font-sans">
        Get in touch.
      </h1>
      <div className="flex text-gray-400">
        <div className="w-3/6">
          <h2 className="text-lg font-semibold text-white font-sans">
            Business Enquiries
          </h2>
          <p className="text-sm py-2 font-serif">
            Interested in partnering with us? Tell us about your product and the
            goals you want it to realise.
          </p>
          <input
            className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans"
            defaultValue="Name"
            type="text"
          />
          <input
            className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans"
            defaultValue="Email"
            type="text"
          />
          <textarea
            className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1 font-sans"
            name=""
            id=""
            cols="30"
            rows="10"
            defaultValue="Message"
          ></textarea>
          <button className="border border-bittersweet text-bittersweet p-4 text-sm text-center w-full rounded font-sans">
            Submit
          </button>
        </div>
        <div className="w-2/6 ml-auto">
          <div>
            <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
              Careers
            </span>
            <p className="py-2 text-xs font-serif">
              See open positions or send in a general application.
            </p>
            <a className="text-xs text-bittersweet font-sans" href="">
              Apply
            </a>
          </div>
          <div>
            <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
              Email
            </span>
            <span className="py-2 text-xs font-serif">hello@obvious.in</span>
          </div>
          <div>
            <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2 font-sans">
              Call
            </span>
            <span className="py-2 text-xs font-serif">+91 80 2919 92919</span>
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
            <a className="text-xs text-bittersweet font-sans" href="">
              See on Google Maps
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
)
