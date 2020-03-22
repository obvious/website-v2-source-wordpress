import React from "react"
import { Link } from "gatsby"

export default () => {
  const clients = [
    { name: `Swiggy`, url: `swiggy` },
    { name: `Flipkart`, url: `flipkart` },
    { name: `Myntra`, url: `myntra` },
    { name: `Gojek`, url: `gojek` },
    { name: `Wikipedia`, url: `wikipedia` },
    { name: `Loco`, url: `loco` },
    { name: `Resolve to Save Lives`, url: `resolve-to-save-lives` },
    { name: `Ola Cabs`, url: `ola-cabs` },
  ]

  return (
    <aside className="bg-white-a90 flex justify-between items-center px-6 py-4 mt-24 font-bold font-sans sm:rounded text-gray-50 fixed left-0 right-0 bottom-0 container">
      <ul className="flex w-5/6 justify-between tracking-tight">
        {clients.map(({ name, url }) => (
          <li key={url} className="px-2">
            <Link to={url} activeClassName="text-white">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <Link className="uppercase text-xs tracking-wide" to="/clients">
        +32 Clients
      </Link>
    </aside>
  )
}
