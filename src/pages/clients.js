import React from "react"
import { Link } from "gatsby"

import SiteHeader from "../components/SiteHeader"

export default () => (
  <div className="flex flex-col justify-start antialiased bg-logCabin min-h-screen">
    <SiteHeader />
    <main className="container px-20">
      <h1 className="text-4xl py-10 text-gray-200 leading-tight font-semibold font-sans">
        A blurb about our clients and we transform ideas into household names.
      </h1>
      <div className="flex text-gray-400 flex-wrap justify-between">
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">
            Quintype
          </h2>
          <p className="py-2 font-serif">
            Reengineering India’s leading news org’s web-publishing platform to
            work 2x faster
          </p>
          <a className="text-xs text-bittersweet font-sans" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">Dunzo</h2>
          <p className="py-2 font-serif">
            Streamlining engineering to create product scalability for Dunzo’s
            hyperlocal market
          </p>
          <a className="text-xs text-bittersweet font-sans" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">Gojek</h2>
          <p className="py-2 font-serif">
            Redesigning the driver partner app for Indonesia’s most loved
            ride-sharing aggregator
          </p>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">Loco</h2>
          <p className="py-2 font-serif">
            Redesigning Pocket Aces’ game app with 10M+ downloads that lets you
            win real money
          </p>
          <a className="text-xs text-bittersweet font-sans" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white font-sans">
            2Gud / Flipkart
          </h2>
          <p className="py-2 font-serif">
            Contributing ~$1B in revenue by product vision for Flipkart’s pivot
            into refurbished products market
          </p>
        </div>
      </div>
      <div className="container py-2 text-gray-500 flex flex-wrap items-start justify-between font-sans">
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Payments
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Slicepay</li>
            <li className="font-semibold text-xs py-1">Zoto</li>
            <li className="font-semibold text-xs py-1">Fisdom</li>
            <li className="font-semibold text-xs py-1">Citruspay</li>
            <li className="font-semibold text-xs py-1">Payzippy</li>
            <li className="font-semibold text-xs py-1">Paisool</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Logistics
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Dunzo</li>
            <li className="font-semibold text-xs py-1">Swiggy</li>
            <li className="font-semibold text-xs py-1">Zomato</li>
            <li className="font-semibold text-xs py-1">Gojek</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Not-For-Profit
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">
              Resolve to Save Lives
            </li>
            <li className="font-semibold text-xs py-1">Pratham Books</li>
            <li className="font-semibold text-xs py-1">YourStory</li>
            <li className="font-semibold text-xs py-1">Ashoka Foundation</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Education
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Gradeup</li>
            <li className="font-semibold text-xs py-1">IMAX</li>
            <li className="font-semibold text-xs py-1">Loco</li>
            <li className="font-semibold text-xs py-1">Wikipedia</li>
          </ul>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Ecommerce
          </h2>
          <ul className="mt-4">
            <li className="font-semibold text-xs py-1">Flipkart</li>
            <li className="font-semibold text-xs py-1">2Gud</li>
            <li className="font-semibold text-xs py-1">Flyte</li>
            <li className="font-semibold text-xs py-1">OLX</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
)
