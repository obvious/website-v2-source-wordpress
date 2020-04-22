import React from "react"
import BackButton from "../atoms/BackButton"
import BackButtonContainer from "./BackButtonContainer"

const BackButtonContainerForPublication = ({
  buttonText,
  backButtonTo,
  className,
  children,
}) => {
  return (
    <BackButtonContainer>
      <BackButton to={backButtonTo}>{buttonText}</BackButton>
      {children}
    </BackButtonContainer>
  )
}

export default BackButtonContainerForPublication
