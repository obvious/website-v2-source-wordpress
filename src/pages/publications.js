import React from "react"
import { Link } from "gatsby"

import SiteHeader from "../components/SiteHeader"

export default () => (
  <div className="flex flex-col justify-start antialiased bg-logCabin min-h-screen">
    <SiteHeader />
    <main className="container px-20">
      <h1 className="py-10 text-gray-200 text-5xl leading-none tracking-tight font-medium font-sans">
        A blurb about our evolving curations on how we're tackling some complex
        global challenges.
      </h1>
      <div className="py-2">
        <h3 className="text-white font-semibold font-sans text-lg border-b border-gray-500 py-2">
          Recent Articles
        </h3>
        <div className="flex-wrap flex py-4">
          <div className="rounded bg-hello w-2/5 mr-4 p-4 flex flex-col justify-between h-40">
            <h4 className="text-white font-sans font-semibold text-lg">
              A day in the life of a Simple engineer
            </h4>
            <span className="text-hello font-sans uppercase tracking-wide font-semibold text-sm">
              January 8, 2019
            </span>
          </div>
          <div className="rounded bg-hello w-2/5 mr-4 p-4 flex flex-col justify-between h-40">
            <h4 className="text-white font-sans font-semibold text-lg">
              Rahul is cool
            </h4>
            <span className="text-hello font-sans uppercase tracking-wide font-semibold text-sm">
              January 8, 2019
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-white font-semibold font-sans text-lg border-b border-gray-500 py-2">
          All Publications
        </h2>
        <div className="flex flex-wrap justify-between py-4">
          <Link className="w-2/5" to="/publication">
            <div className="flex-col flex inline-flex">
              <div className="relative inline-block self-start mb-10">
                <div className="bg-white relative p-2 z-40 shadow-md">
                  <img src="../images/287.png" alt="" />
                </div>
                <div className="bg-white p-2 absolute w-full h-full inline-block -bottom-2 -right-2 z-20 shadow-md"></div>
                <div className="bg-white p-2 absolute w-full h-full -bottom-4 -right-4 z-10 shadow-md"></div>
              </div>
              <span className="bg-yellow-400 rounded px-2 py-1 font-sans text-sm font-medium self-start">
                New
              </span>
              <span className="font-sans text-xl text-white font-semibold self-start mt-2">
                Inside Obvious
              </span>
              <p className="font-serif text-white text-base self-start mt-2 leading-relaxed">
                A fresh approach to context and location of those just coming
                online. Here we chronicle the learnings, insights and processes
                that we’ve learnt along the way
              </p>
            </div>
          </Link>
          <div className="flex-col flex inline-flex w-2/5">
            <div className="relative inline-block self-start mb-10">
              <div className="bg-white relative p-2 z-40 shadow-md">
                <img src="../images/image.png" alt="" />
              </div>
              <div className="bg-white p-2 absolute w-full h-full inline-block -bottom-2 -right-2 z-20 shadow-md"></div>
              <div className="bg-white p-2 absolute w-full h-full -bottom-4 -right-4 z-10 shadow-md"></div>
            </div>
            <span className="rounded bg-blue-400 px-2 py-1 font-sans text-sm font-medium self-start">
              Recently Updated
            </span>

            <span className="font-sans text-xl text-white font-semibold self-start mt-2">
              Obvious at Large
            </span>
            <p className="font-serif text-white text-base self-start mt-2 leading-relaxed">
              A fresh approach to context and location of those just coming
              online. Here we chronicle the learnings, insights and processes
              that we’ve learnt along the way
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
)
