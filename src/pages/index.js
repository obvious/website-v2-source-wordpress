import React from "react"

import SiteHeader from "../components/SiteHeader"
import ClientCard from "../components/ClientCard"
import HeroTitle from "../components/HeroTitle"

export default () => (
  <div className="flex flex-col justify-start antialiased bg-logCabin min-h-screen">
    <SiteHeader />
    <main className="container px-20">
      <HeroTitle />
      <div className="flex justify-center flex-wrap py-2">
        <ClientCard client="Swiggy" width="half" />
        <ClientCard className="pl-2" client="Flipkart" width="half" />
        <ClientCard client="Myntra" width="full" />
        <ClientCard client="Wikipedia" width="full" />
      </div>
    </main>
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
      <a className="uppercase text-sm" href="">
        +32 Clients
      </a>
    </aside>
  </div>
)
