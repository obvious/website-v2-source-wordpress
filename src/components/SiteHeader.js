import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import ObviousLink from "./atoms/ObviousLink"
import { useWindowSize } from "../utils/use-window-size"
import PreviewCompatibleImage from "./atoms/PreviewCompatibleImage"
import {motion} from "framer-motion"
import { MenuToggle } from "./molecules/MenuToggle"

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


// TODO - mobile menu close animation should be possible via framer
export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  
  const {width} = useWindowSize();
  
  const isOpenable = () => width < 640
  
  if(!isOpenable() && isOpen) {
    setIsOpen(false)
  }
  
  const menuListVariants = {
    open: {
      height: 236,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
  
  const mobileMenuIsOpenClassNames = 'border-t-2 border-gray-10 absolute top-0 mt-14 h-auto left-0 right-0 block grid-flow-row bg-black-a100 shadow-lg'
  return (
    <StaticQuery
      query={graphql`
      query HeadingQuery {
        WP {
          page(id: "cGFnZTo4OA==") {
            navigation {
              fieldGroupName
              menu {
                menuitem {
                  fieldGroupName
                  menuitemname
                  openInTheSameTab
                  menuitemlink {
                    target
                    title
                    url
                  }
                }
              }
              logo {
                altText
                sourceUrl(size: LARGE)
                imageFile {
                  publicURL
                  childImageSharp {
                    fixed {
                    ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
      render={({WP: {page : {navigation : {logo, menu: {menuitem}}}}}) => {
        return (
          <>
            {/* Because header is fixed, this will help push down the other content by the same amount as the height of the header */}
            <div className="site-header"/>
            <header className="bg-black-a100 font-sans z-20 fixed top-0 left-0 right-0 z-50">
              <motion.div
                initial="closed"
                className="text-gray-500 flex items-center site-header justify-between mx-auto container px-10 overflow-hidden"
                animate={isOpen ? "open" : "closed"}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link className="text-white" to="/">
                  <PreviewCompatibleImage className="fill-current h-6" image={logo} />
                </Link>
                <MenuToggle className="cursor-pointer text-gray-50 mt-1 sm:hidden" toggle={() => toggleIsOpen()}/>
                <motion.ul variants={isOpenable() ? menuListVariants : null} className={`${isOpen ? mobileMenuIsOpenClassNames : 'hidden'} font-medium text-base text-gray-50 grid sm:grid sm:gap-10 sm:grid-flow-col sm:h-full flex items-center`}>
                  {menuitem.map(item => (
                    <motion.li
                      variants={isOpenable() ? menuItemVariants : null}
                      className="sm:h-full"
                    >
                      <ObviousLink openInSameTab={item.openInTheSameTab} className="border-r-2 border-t-0 sm:border-r-0 sm:border-t-2 h-full w-full sm:w-auto px-10 py-4 sm:py-0 sm:px-0 flex sm:items-center justify-end sm:justify-center border-transparent sm:pb-1" activeClassName="text-white shadow-inner border-orange-50" url={item.menuitemlink.url}>
                        {item.menuitemname}
                      </ObviousLink>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </header>
          </>
        )}}
    />
  
  )
}
