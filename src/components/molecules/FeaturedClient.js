import React, { useState } from "react"

import { Heading } from "../Heading"
import ObviousLink from "../atoms/ObviousLink"
import { ArrowRight } from "../atoms/Icon"

import { motion } from "framer-motion"

const rightIconVariants = {
  open: {
    x: 10,
    transition: {
      delay: 0.05,
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
  closed: {
    x: 0,
    transition: {
      delay: 0.05,
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
}
const headingVariants = {
  open: {
    x: 10,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
  closed: {
    x: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
}

export default ({ client, subtitle, link }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => setIsOpen(false)}
      className="text-gray-400 cursor-pointer w-full py-2 sm:py-4"
    >
      <ObviousLink
        className="w-full"
        url={link.href}>
        <div
          className="w-full grid gap-1 items-start"
        >
          <div className="grid gap-2 grid-flow-col items-center justify-between sm:justify-start">
            <motion.div variants={headingVariants} >
              <Heading type="h3" className="font-medium">{client}</Heading>
            </motion.div>
            <motion.span variants={rightIconVariants} className="mt-1"><ArrowRight /></motion.span>
          </div>
          {subtitle && <Heading type="h5">{subtitle}</Heading>}
        </div>
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
    </motion.div>
  )
}
