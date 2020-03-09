import React from "react"
import { Link } from "gatsby"

import Obvious from "./icons/Obvious"

export default ({ isOpen, toggleIsOpen }) => {
  return (
    <>
      <header className="bg-black font-sans z-20">
        <div className="text-gray-500 flex items-center justify-between mx-auto container py-6 px-10 sm:px-20">
          <Link className="text-white" to="/">
            <Obvious className="fill-current h-6" />
          </Link>
          <div onClick={toggleIsOpen} className="text-world sm:hidden">
            {isOpen ? (
              <svg className="fill-current h-4" viewBox="0 0 20 20">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg className="fill-current h-4" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </div>
          <ul className="justify-between font-medium text-base text-world hidden sm:flex lg:w-2/3">
            <Link className="px-2" activeClassName="text-white" to="/clients">
              <li>Clients</li>
            </Link>
            <Link
              className="px-2"
              activeClassName="text-white"
              to="/publications"
            >
              <li>Publications</li>
            </Link>
            <a className="px-2" href="https://playbook.obvious.in/">
              <li>Playbook</li>
            </a>
            <Link className="px-2" activeClassName="text-white" to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  )
}
