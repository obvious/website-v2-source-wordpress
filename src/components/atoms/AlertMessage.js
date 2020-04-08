import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import scrollToRef from "../../utils/scrollto"

const AlertMessage = ({children, type}) => {
  const classes = 'rounded-sm transition duration-500 ease-in-out px-4 py-4 font-medium text-center bg-green-50 text-black text-md font-sans'
  const typeBasedClasses = type === 'success' ? 'bg-green-50' : 'bg-red-50'
  const alertMessageRef = useRef(null)
  const executeScroll = () => scrollToRef(alertMessageRef)
  
  useEffect(() => {
    executeScroll()
  })
  return <div ref={alertMessageRef} className={`${classes} ${typeBasedClasses}`}>
    {children}
  </div>
}

AlertMessage.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired
}

export default AlertMessage;