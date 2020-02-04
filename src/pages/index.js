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
        We transform ideas
        <br />
        into household names.
      </h1>
      <div className="flex justify-center flex-wrap py-2">
        {/* <a href=""> */}
        <div className="w-1/2">
          <div className="rounded bg-orange-500 shadow p-4 h-full">
            <h2 className="text-3xl">Swiggy</h2>
            <span className="text-4xl">100</span>
            <p>Million Customers. First year. First app.</p>
          </div>
        </div>
        {/* </a> */}
        {/* <a href=""> */}
        <div className="w-1/2 pl-2">
          <div className="rounded bg-orange-500 shadow p-4">
            <h2 className="text-3xl">Flipkart</h2>
            <span className="text-4xl">4x</span>
            <p>Revenue in one year for eBay India’s pivot into 2Gud</p>
          </div>
        </div>
        {/* </a> */}
        {/* <a href=""> */}
        <div className="rounded bg-orange-500 shadow p-4 w-full mt-2">
          <h2 className="text-3xl">Myntra</h2>
          <p>100 million customers. First app. First year.</p>
        </div>
        {/* </a> */}
        {/* <a href=""> */}
        <div className="rounded bg-orange-500 shadow p-4 w-full mt-2">
          <h2 className="text-3xl">Wikipedia</h2>
          <p>Million Customers. First year. First app.</p>
        </div>
        {/* </a> */}
      </div>
    </main>
    <aside className="bg-gray-800 flex justify-between px-4 py-2 text-xs font-semibold text-gray-600 mx-4 mt-auto">
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
      <a href="">+32 Clients</a>
    </aside>
  </div>
)
