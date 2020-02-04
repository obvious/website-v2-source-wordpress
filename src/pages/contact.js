import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="bg-gray-900 h-screen flex flex-col justify-start">
    <header className="bg-black px-20">
      <div className="container py-2 text-gray-500 flex items-center justify-between">
        <Link to="/">
          <div>Obvious</div>
        </Link>
        <ul className="flex w-2/3 justify-between text-xs font-semibold text-gray-600 ">
          <Link to="/clients">
            <li className="text-white">Clients</li>
          </Link>
          <a href="">
            <li>Publications</li>
          </a>
          <a href="">
            <li>Playbook</li>
          </a>
          <a href="">
            <li>Company</li>
          </a>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </header>
    <main className="container px-20">
      <h1 className="text-4xl py-10 text-gray-200 leading-tight font-semibold">
        Get in touch.
      </h1>
      <div className="flex text-gray-400">
        <div className="w-3/6">
          <h2 className="text-lg font-semibold text-white">
            Business Enquiries
          </h2>
          <p className="text-sm py-2">
            Interested in partnering with us? Tell us about your product and the
            goals you want it to realise.
          </p>
          <input
            className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1"
            value="Name"
            type="text"
          />
          <input
            className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1"
            value="Email"
            type="text"
          />
          <textarea
            className="bg-transparent border border-gray-400 rounded p-4 text-sm w-full my-1"
            name=""
            id=""
            cols="30"
            rows="10"
          >
            Message
          </textarea>
          <button className="border border-orange-500 text-orange-500 p-4 text-sm text-center w-full rounded">
            Submit
          </button>
        </div>
        <div className="w-2/6 ml-auto">
          <div>
            <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2">
              Careers
            </span>
            <p className="py-2 text-xs">
              See open positions or send in a general application.
            </p>
            <a className="text-xs text-orange-500" href="">
              Apply
            </a>
          </div>
          <div>
            <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2">
              Email
            </span>
            <span className="py-2 text-xs">hello@obvious.in</span>
          </div>
          <div>
            <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2">
              Call
            </span>
            <span className="py-2 text-xs">+91 80 2919 92919</span>
          </div>
          <div>
            <span className="text-xs text-white block border-b border-gray-500 font-semibold py-2">
              Visit Us
            </span>
            <p className="py-2 text-xs">
              Level 2, Raheja Paramount
              <br />
              138 Residency Road
              <br />
              Bengaluru 560025
            </p>
            <a className="text-xs text-orange-500" href="">
              See on Google Maps
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
)
