import React from "react"

import { Heading } from "./Heading"
import ObviousLink from "./atoms/ObviousLink"
import { ArrowRight } from "./atoms/Icon"

export default ({ featuredClientBlock }) => (
  <>
    {featuredClientBlock.map(({ client, subtitle, link }) => (
      <div className="text-gray-400 w-full flex items-start">
        <ObviousLink className="w-full" url={link.href}>
          <span className="w-full cursor-pointer grid gap-1 items-start">
            <span className="grid gap-2 grid-flow-col items-center justify-between sm:justify-start">
              <Heading type="h3" className="font-medium">{client}</Heading>
              <span className="mt-1"><ArrowRight /></span>
            </span>
            {subtitle && <Heading type="h5">{subtitle}</Heading>}
          </span>
        </ObviousLink>
        {/*<BodyText type="body-large" className="py-2">{description}</BodyText>*/}
        {/*TODO: Fix link*/}
        {/*{link && (*/}
        {/*  <a*/}
        {/*    className="text-xs text-orange-50 font-sans flex justify-center items-center"*/}
        {/*    href={link.href}*/}
        {/*  >*/}
        {/*    {link.text}*/}
        {/*    {link.text && (*/}
        {/*      <RightArrow className="text-orange-50 fill-current px-2 h-3" />*/}
        {/*    )}*/}
        {/*  </a>*/}
        {/*)}*/}
      </div>
    ))}
  </>
)
