import React from "react"
import { Link } from "gatsby"

import SiteHeader from "../components/SiteHeader"

export default () => (
  <div className="flex flex-col justify-start antialiased bg-logCabin min-h-screen">
    <SiteHeader />
    <main className="container px-20 py-20 flex">
      <div className="flex-col flex inline-flex w-2/5">
        <div className="relative inline-block self-start mb-10 w-48">
          <div className="bg-white relative p-2 z-40 shadow-md">
            <img src="../images/287.png" alt="" />
          </div>
          <div className="bg-white p-2 absolute w-full h-full inline-block -bottom-2 -right-2 z-20 shadow-md"></div>
          <div className="bg-white p-2 absolute w-full h-full -bottom-4 -right-4 z-10 shadow-md"></div>
        </div>
        <h3 className="text-white font-sans font-medium leading-tight text-2xl">
          User Research & the Next Billion Stories
        </h3>
        <p className="font-serif text-gray-300 mt-4 leading-snug">
          A fresh approach to context and location of those just coming online.
          Here we chronicle the learnings, insights and processes that we’ve
          learnt along the way
        </p>
        <span className="text-white font-sans font-medium text-sm mt-8 border-b border-gray-300 pb-2">
          Colophon
        </span>
        <div className="mt-2">
          <span className="font-serif text-gray-300 text-xs italic font-medium">
            Curated by 
          </span>
          <span className="font-sans uppercase text-bittersweet text-xs font-medium">
            Padmini Ray Murray
          </span>
        </div>
        <div>
          <span className="font-serif text-gray-300 text-xs italic font-medium">
            Cover Illustration by 
          </span>
          <span className="font-sans uppercase text-bittersweet text-xs font-medium">
            Chippy Robin
          </span>
        </div>
      </div>
      <div className="w-3/5 pl-16">
        <Link to="/article">
          <div className="bg-white p-6 mb-6 rounded-sm min-h-xs">
            <h3 className="font-sans text-2xl leading-tight font-semibold border-gray-300 border-b-2 pb-2">
              A day in the life of a Simple engineer
            </h3>
            <h4 className="text-xs border-gray-300 font-medium text-gray-600 py-3">
              <span className="uppercase font-sans">January 8, 2019</span>
              <span className="font-serif italic"> by </span>
              <span className="font-sans uppercase">Sanchita Agarwal</span>
            </h4>
            <p className="font-serif text-sm font-medium text-gray-800">
              When I joined Obvious, Simple — an open-source app for clinicians
              to track patients with high blood pressure — was in beta, and
              since then has been at the heart of my work. I’ve been working on
              the app for more than a year now, and it has been quite a...
            </p>
          </div>
        </Link>
        <div className="bg-white p-6 mb-6 rounded-sm min-h-xs">
          <h3 className="font-sans text-2xl leading-tight font-semibold border-gray-300 border-b-2 pb-2">
            A day in the life of a Simple engineer
          </h3>
          <h4 className="text-xs border-gray-300 font-medium text-gray-600 py-3">
            <span className="uppercase font-sans">January 8, 2019</span>
            <span className="font-serif italic"> by </span>
            <span className="font-sans uppercase">Sanchita Agarwal</span>
          </h4>
          <p className="font-serif text-sm font-medium text-gray-800">
            When I joined Obvious, Simple — an open-source app for clinicians to
            track patients with high blood pressure — was in beta, and since
            then has been at the heart of my work. I’ve been working on the app
            for more than a year now, and it has been quite a...
          </p>
        </div>
        <div className="bg-white p-6 mb-6 rounded-sm min-h-xs">
          <h3 className="font-sans text-2xl leading-tight font-semibold border-gray-300 border-b-2 pb-2">
            A day in the life of a Simple engineer
          </h3>
          <h4 className="text-xs border-gray-300 font-medium text-gray-600 py-3">
            <span className="uppercase font-sans">January 8, 2019</span>
            <span className="font-serif italic"> by </span>
            <span className="font-sans uppercase">Sanchita Agarwal</span>
          </h4>
          <p className="font-serif text-sm font-medium text-gray-800">
            When I joined Obvious, Simple — an open-source app for clinicians to
            track patients with high blood pressure — was in beta, and since
            then has been at the heart of my work. I’ve been working on the app
            for more than a year now, and it has been quite a...
          </p>
        </div>
        <div className="bg-white p-6 mb-6 rounded-sm min-h-xs">
          <h3 className="font-sans text-2xl leading-tight font-semibold border-gray-300 border-b-2 pb-2">
            A day in the life of a Simple engineer
          </h3>
          <h4 className="text-xs border-gray-300 font-medium text-gray-600 py-3">
            <span className="uppercase font-sans">January 8, 2019</span>
            <span className="font-serif italic"> by </span>
            <span className="font-sans uppercase">Sanchita Agarwal</span>
          </h4>
          <p className="font-serif text-sm font-medium text-gray-800">
            When I joined Obvious, Simple — an open-source app for clinicians to
            track patients with high blood pressure — was in beta, and since
            then has been at the heart of my work. I’ve been working on the app
            for more than a year now, and it has been quite a...
          </p>
        </div>
      </div>
    </main>
  </div>
)
