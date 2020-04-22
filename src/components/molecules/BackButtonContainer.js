import React, { useState } from "react"
import { motion } from "framer-motion"
import { useWindowSize } from "../../utils/use-window-size"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const BackButtonContainer = ({ className, children, ...props }) => {
  const [showing, setShowing] = useState(true)

  const { width } = useWindowSize()
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const shouldShow = currPos.y > prevPos.y
      if (width < 768) {
        if (shouldShow !== showing) setShowing(shouldShow)
      } else {
        setShowing(true)
      }
    },
    [showing, width]
  )
  const variants = {
    closed: {
      height: 80,
      transition: {
        type: "spring",
        duration: 0.4,
        stiffness: 200,
        damping: 500,
      },
    },
    open: {
      height: width > 768 ? 192 : 258,
      transition: {
        type: "spring",
        duration: 0.4,
        stiffness: 200,
        damping: 50,
      },
    },
  }

  return (
    <motion.div className={`${className}`} {...props}>
      <div className="h-20" />
      <motion.div
        variants={variants}
        className="overflow-hidden fixed z-40 site-header-pushdown top-0 min-h-20 left-0 right-0"
      >
        <motion.div
          animate={{ y: showing ? 0 : "-100%" }}
          transition={{ ease: "easeOut" }}
          className="bg-gray-10 absolute top-0 left-0 right-0 bottom-0 py-4 flex justify-center"
        >
          <div className="container px-10 flex">{children}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default BackButtonContainer
