import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import ObviousLink from "./atoms/ObviousLink"
import PreviewCompatibleImage from "./atoms/PreviewCompatibleImage"
import {motion} from "framer-motion"
import { MenuToggle } from "./molecules/MenuToggle"
import ObviousContainer from "./atoms/ObviousContainer"

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
  
  const menuListVariants = {
    open: {
      height: 236,
      transition: { duration: 0.3, staggerChildren: 0.07, delayChildren: 0.07 }
    },
    closed: {
      height: 0,
      transition: { duration: 0.3,
        delay: 0.07,
        staggerChildren: 0.03, staggerDirection: 0 }
    }
  };
  
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
                    fluid {
                    ...GatsbyImageSharpFluid
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
              <ObviousContainer
                className="text-gray-500"
              >
              <motion.div
                initial="closed"
                className="flex items-center site-header justify-between overflow-hidden"
                animate={isOpen ? "open" : "closed"}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link className="text-white" to="/">
                  <PreviewCompatibleImage className="fill-current h-6" image={logo} />
                </Link>
                <MenuToggle className="cursor-pointer text-gray-50 mt-1 sm:hidden" toggle={() => toggleIsOpen()}/>
                <motion.ul variants={menuListVariants} className={`border-t-2 overflow-hidden border-gray-10 absolute top-0 mt-14 h-auto left-0 right-0 grid-flow-row bg-black-a100 shadow-lg font-medium text-base text-gray-50 grid sm:hidden flex items-center`}>
                  {menuitem.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={menuItemVariants}
                    >
                      <MenuItem className="border-r-2 border-t-0 w-full px-7 sm:px-10 py-4 justify-end" item={item}/>
                    </motion.li>
                  ))}
                </motion.ul>
                <ul className={'font-medium text-base text-gray-50 grid gap-10 grid-flow-col hidden sm:grid h-full flex items-center'}>
                  {menuitem.map((item, index) => (
                    <li
                      key={index}
                      className="h-full"
                    >
                      <MenuItem className="border-r-0 border-t-2 w-auto py-0 px-0 pb-1 items-center justify-center" item={item}/>
                    </li>
                  ))}
                </ul>
              </motion.div>
              </ObviousContainer>
            </header>
          </>
        )}}
    />
  
  )
}


const MenuItem = ({item, className}) =>
  <ObviousLink
    openInSameTab={item.openInTheSameTab}
    className={`${className} h-full flex border-transparent`} activeClassName="text-white shadow-inner border-orange-50" url={item.menuitemlink.url}>
    {item.menuitemname}
  </ObviousLink>