import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <aside className="flex justify-between items-center px-6 py-4 text-lg font-bold mx-12 mt-auto font-sans tracking-tight rounded bg-hello text-world">
      <ul className="flex w-5/6 justify-between">
        <li>Swiggy</li>
        <li className="text-white">Flipkart</li>
        <li>Myntra</li>
        <li>Gojek</li>
        <li>Wikipedia</li>
        <li>Loco</li>
        <li>Resolve to Save Lives</li>
        <li>Ola Cabs</li>
      </ul>
      <Link className="uppercase text-sm" to="/clients">
        +32 Clients
      </Link>
    </aside>
  )
}
