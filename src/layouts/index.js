import React, { useState } from "react"
import { Link } from "gatsby"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"

export default ({ children, showFooter = false, className }) => {
  
  return (
    <div className={`flex flex-col justify-start antialiased bg-gray-10 pt-14 min-h-screen ${className}`}>
      <SiteHeader />
      <main className="container mx-auto">
        {/*{isOpen && (*/}
        {/*  <div className="px-10 text-world flex justify-end text-right py-4 absolute z-10 bg-black w-screen border-world border-t">*/}
        {/*    <ul>*/}
        {/*      <Link className="px-2" activeClassName="text-white" to="/clients">*/}
        {/*        <li>Clients</li>*/}
        {/*      </Link>*/}
        {/*      <Link*/}
        {/*        className="px-2"*/}
        {/*        activeClassName="text-white"*/}
        {/*        to="/publications"*/}
        {/*      >*/}
        {/*        <li>Publications</li>*/}
        {/*      </Link>*/}
        {/*      <a className="px-2" href="https://playbook.obvious.in/">*/}
        {/*        <li>Playbook</li>*/}
        {/*      </a>*/}
        {/*      <Link className="px-2" activeClassName="text-white" to="/contact">*/}
        {/*        <li>Contact</li>*/}
        {/*      </Link>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*)}*/}
        <div className="px-10 sm:px-20 sm:py-10">{children}</div>
      </main>
      {showFooter && <SiteFooter />}
    </div>
  )
}
