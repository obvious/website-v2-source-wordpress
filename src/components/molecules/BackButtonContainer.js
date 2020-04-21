import React from "react"
import {motion} from "framer-motion"

const variants = {
  closed: {
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 200,
      damping: 500
    }
  },
  open: {
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 200,
      damping: 50
    }
  },
}

const BackButtonContainer = ({ className, children, ...props }) => {
  return (
    <motion.div className={`${className}`} {...props}>
      <div className="h-16 lg:h-20"/>
      <motion.div variants={variants} className="fixed z-40 site-header-pushdown top-0 py-4 min-h-16 lg:min-h-20 left-0 right-0 flex items-center justify-center bg-gray-10">
        <motion.div className="container px-10 flex items-center">
          {children}
        </motion.div>
      
      </motion.div>
    
    </motion.div>
  )
}

export default BackButtonContainer;