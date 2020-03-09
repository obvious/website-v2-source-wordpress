import React from "react"
import { Link } from "gatsby"

import Obvious from "./icons/Obvious"
import Hamburger from "./icons/Hamburger"
import Close from "./icons/Close"

export default ({ isOpen, toggleIsOpen }) => {
  return (
    <>
      <header className="bg-black font-sans z-20">
        <div className="text-gray-500 flex items-center justify-between mx-auto container py-6 px-10 sm:px-20">
          <Link className="text-white" to="/">
            <Obvious className="fill-current h-6" />
          </Link>
          <div onClick={toggleIsOpen} className="text-gray-50 sm:hidden">
            {isOpen ? (
              <Close className="fill-current h-4" />
            ) : (
              <Hamburger className="fill-current h-4" />
            )}
          </div>
          <ul className="justify-between font-medium text-base text-gray-50 hidden sm:flex lg:w-2/3">
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
