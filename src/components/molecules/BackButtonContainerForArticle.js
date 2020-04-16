import React from "react"
import StackedImage from "../StackedImage"
import BackButtonContainer from "./BackButtonContainer"
import BackButton from "../atoms/BackButton"
import IconButton from "../atoms/IconButton"
import { ChevronDown } from "../atoms/Icon"
import { Heading } from "../Heading"

const BackButtonContainerForArticle = ({ image, className, titleText, backButtonTo, buttonText }) => {
  return (<BackButtonContainer>
    <div className="grid w-full items-center grid-flow-col gap-4 md:gap-6 lg:gap-10" style={ {gridTemplateColumns: 'repeat(minmax(auto, 60%))'}}>
      <div>
        <BackButton to={backButtonTo} customIcon={<div className="w-8 mt-1/2">
          <StackedImage image={image} size="small"/>
        </div>}>
          {buttonText}
        </BackButton>
      </div>
      
      <Heading type="h4" className="hidden md:block text-white md:min-w-xs xl:min-w-xxl" style={{'justify-self': 'stretch'}}>{titleText}</Heading>
      <IconButton className="text-right" style={{'justify-self': 'end'}} icon={<ChevronDown className="text-gray-50" />}></IconButton>
    </div>
  </BackButtonContainer>)
}

export default BackButtonContainerForArticle;