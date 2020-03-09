import React from "react"

import Twitter from "./icons/Twitter"
import GitHub from "./icons/GitHub"
import Dribble from "./icons/Dribble"
import Linkedin from "./icons/Linkedin"

export default () => {
  return (
    <footer className="bg-hello text-world mt-auto py-8">
      <div className="flex container mx-auto justify-between items-center">
        <ul className="flex w-1/4 justify-between text-xs font-semibold font-sans tracking-widest uppercase">
          <a href="https://obvious.in/team/">team</a>
          <a href="https://obvious.in/talks-appearances/">talks</a>
          <a href="http://playbook.obvious.in/">playbook</a>
          <a href="https://jobs.obvious.in/">jobs</a>
        </ul>
        <span className="font-sans tracking-widest text-xs font-semibold uppercase">
          © 2020 Obvious
        </span>
        <ul className="flex w-1/4 justify-between">
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
