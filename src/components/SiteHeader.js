import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Obvious from "./icons/Obvious"
import Hamburger from "./icons/Hamburger"
import Close from "./icons/Close"
import ObviousLink from "./atoms/ObviousLink"
import { useWindowSize } from "../utils/use-window-size"


export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  
  const {width} = useWindowSize();
  
  if(width >= 640 && isOpen) {
    setIsOpen(false)
  }
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
              }
            }
          }
        }
      }
    `}
      render={({WP: {page : {navigation : {logo, menu: {menuitem}}}}}) => {
        return (
          <>
            <header className="bg-black-a100 font-sans z-20 fixed top-0 left-0 right-0 z-50">
              <div className="text-gray-500 flex items-center h-14 justify-between mx-auto container px-10 sm:px-20">
                <Link className="text-white" to="/">
                  <Obvious className="fill-current h-6" />
                </Link>
                <div onClick={toggleIsOpen} className="cursor-pointer text-gray-50 sm:hidden">
                  {isOpen ? (
                    <Close className="fill-current h-4" />
                  ) : (
                    <Hamburger className="fill-current h-4" />
                  )}
                </div>
                <ul className={`${isOpen ? mobileMenuIsOpenClassNames : 'hidden'} font-medium text-base text-gray-50 grid sm:grid sm:gap-10 sm:grid-flow-col sm:h-full flex items-center`}>
                  {menuitem.map(item => (
                    <li className="sm:h-full">
                      <ObviousLink openInSameTab={item.openInTheSameTab} className="border-r-2 border-t-0 sm:border-r-0 sm:border-t-2 h-full w-full sm:w-auto px-10 py-4 sm:py-0 sm:px-0 flex sm:items-center justify-end sm:justify-center border-transparent sm:pb-1" activeClassName="text-white shadow-inner border-orange-50" url={item.menuitemlink.url}>
                        {item.menuitemname}
                      </ObviousLink>
                    </li>
                  ))}
                </ul>
              </div>
            </header>
          </>
        )}}
    />
  
  )
}
