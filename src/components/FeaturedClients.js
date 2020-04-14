import React from "react"

import { Heading } from "./Heading"
import ObviousLink from "./atoms/ObviousLink"

export default ({ featuredClientBlock }) => (
  <div className="grid text-gray-400 grid-flow-row sm:grid-cols-2 col-gap-8 md:col-gap-0 row-gap-12">
    {featuredClientBlock.map(({ client, description, link }) => (
      <div className="md:w-2/3 flex items-start">
        <ObviousLink url={link.href}>
          <Heading type="h3" className="font-medium">{client}</Heading>
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
  </div>
)
