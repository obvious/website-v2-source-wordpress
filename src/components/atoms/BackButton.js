import { ArrowLeft } from "./Icon"
import IconButton from "./IconButton"
import ObviousLink from "./ObviousLink"
import React from "react"
import { motion } from "framer-motion"
import StackedImage from "../StackedImage"

const imageVariants = {
  closed: {
    opacity: 1,
    display: "block",
    transition: {
      type: "spring",
      duration: 0.6,
      // stiffness: 200,
      // damping: 500
    },
  },
  open: {
    opacity: 0,
    display: "none",
    transition: {
      type: "spring",
      duration: 0.6,
      // stiffness: 200,
      // damping: 50
    },
  },
}

const defaultVariants = {
  open: {
    opacity: 1,
    display: "block",
    transition: {
      type: "spring",
      duration: 0.6,
      // stiffness: 200,
      // damping: 500
    },
  },
  closed: {
    opacity: 0,
    display: "none",
    transition: {
      type: "spring",
      duration: 0.6,
      // stiffness: 200,
      // damping: 50
    },
  },
}

const BackButton = ({ children, to, className, stackedImage }) => {
  return (
    <div
      className="relative grid grid-flow-col gap-4 h-full"
      style={{ justifyContent: "start" }}
    >
      {to && (
        <ObviousLink
          url={to}
          className={`${className} z-40 absolute top-0 left-0 right-0 bottom-0 flex items-center h-full`}
        />
      )}
      {stackedImage && (
        <motion.div variants={imageVariants} className="opacity-0 w-8 py-1">
          <StackedImage image={stackedImage} size="small" />
        </motion.div>
      )}
      <motion.div
        variants={defaultVariants}
        className="aspect-ratio-16/21 w-8 py-2 relative"
      >
        <IconButton className="absolute top-0 left-0 bottom-0 right-0 w-full flex items-center justify-center"
                    icon={<ArrowLeft className="text-orange-50"/>}
        />
      </motion.div>
      <span
        className="text-gray-50 limit-lines-2"
        style={{ alignSelf: "center" }}
      >
        {children}
      </span>
    </div>
  )
}

export default BackButton
