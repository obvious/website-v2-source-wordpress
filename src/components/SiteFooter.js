import React from "react"

import Twitter from "./icons/Twitter"
import GitHub from "./icons/GitHub"
import Dribble from "./icons/Dribble"
import Linkedin from "./icons/Linkedin"
import ObviousLink from "./atoms/ObviousLink"
import Button from "./atoms/Button"

export default () => {
  return (
    <footer className="bg-black-a100 text-gray-50 mt-auto py-6">
      <div className="grid container px-10 grid-flow-row gap-8 mx-auto sm:gap-0 sm:grid-flow-col gap items-center">
        {/*<ul className="flex w-1/4 justify-between text-xs font-semibold font-sans tracking-widest uppercase">*/}
        {/*  <a href="https://obvious.in/team/">team</a>*/}
        {/*  <a href="https://obvious.in/talks-appearances/">talks</a>*/}
        {/*  <a href="http://playbook.obvious.in/">playbook</a>*/}
        {/*  <a href="https://jobs.obvious.in/">jobs</a>*/}
        {/*</ul>*/}
        <ObviousLink url="/contact" className="w-full sm:w-64">
          <Button className="font-bold" color="white" textSize="md">Work with us</Button>
        </ObviousLink>
        {/*<span className="font-sans tracking-widest text-xs font-semibold uppercase">*/}
        {/*  © 2020 Obvious*/}
        {/*</span>*/}
        <ul className="text-center grid justify-center gap-12 sm:gap-12 grid-flow-col items-center sm:justify-end">
          <a href="https://twitter.com/Obvious_In">
            <Twitter className="fill-current h-4" />
          </a>
          <a href="https://github.com/obvious/">
            <GitHub className="fill-current h-4" />
          </a>
          <a href="https://dribbble.com/obvious_hq">
            <Dribble className="fill-current h-4" />
          </a>
          <a href="https://www.linkedin.com/company/obvious-hq/">
            <Linkedin className="fill-current h-4" />
          </a>
        </ul>
      </div>
    </footer>
  )
}
