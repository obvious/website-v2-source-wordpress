import React from "react"

import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"

export default ({ children, showFooter = true, className }) => {
  
  return (
    <div className={`flex flex-col justify-start antialiased bg-gray-10 min-h-screen ${className}`}>
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
        <div className="px-10 sm:py-10">{children}</div>
      </main>
      {showFooter && <>
        <div className="h-20" />
        <SiteFooter />
        </>}
    </div>
  )
}
