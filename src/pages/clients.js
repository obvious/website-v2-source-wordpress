import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="bg-gray-900 flex flex-col justify-start">
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
        A blurb about our clients and we transform ideas into household names.
      </h1>
      <div className="flex text-gray-400 flex-wrap justify-between">
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white">Quintype</h2>
          <p className="py-2">
            Reengineering India’s leading news org’s web-publishing platform to
            work 2x faster
          </p>
          <a className="text-xs text-orange-500" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white">Dunzo</h2>
          <p className="py-2">
            Streamlining engineering to create product scalability for Dunzo’s
            hyperlocal market
          </p>
          <a className="text-xs text-orange-500" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white">Gojek</h2>
          <p className="py-2">
            Redesigning the driver partner app for Indonesia’s most loved
            ride-sharing aggregator
          </p>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white">Loco</h2>
          <p className="py-2">
            Redesigning Pocket Aces’ game app with 10M+ downloads that lets you
            win real money
          </p>
          <a className="text-xs text-orange-500" href="">
            Read Case Study
          </a>
        </div>
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xl text-white">2Gud / Flipkart</h2>
          <p className="py-2">
            Contributing ~$1B in revenue by product vision for Flipkart’s pivot
            into refurbished products market
          </p>
        </div>
      </div>
      <div className="container py-2 text-gray-500 flex flex-wrap items-start justify-between">
        <div className="w-1/3 my-4 mr-4">
          <h2 className="font-semibold text-xs text-white border-b border-gray-500 py-2">
            Payments
          </h2>
          <ul>
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
          <ul>
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
          <ul>
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
          <ul>
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
          <ul>
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
