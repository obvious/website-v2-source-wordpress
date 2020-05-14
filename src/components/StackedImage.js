import React from "react"
import PreviewCompatibleImage from "./atoms/PreviewCompatibleImage"

export default ({ image, aspectRatio =  '16/21', size = 'large' }) => {
  
  const sizeBasedClasses = {
    'large': {
      mainCard: 'pr-4 pb-2',
      innerCard: 'p-2',
      outerCardFirst: 'p-2 -bottom-2 -right-2',
      outerCardSecond: 'p-2 -bottom-4 -right-4'
    },
    'medium': {
      mainCard: 'pr-4 pb-2',
      innerCard: 'p-2',
      outerCardFirst: 'p-2 -bottom-2 -right-2',
      outerCardSecond: 'p-2 -bottom-4 -right-4'
    },
    'small': {
      mainCard: 'pr-1/2 pb-1/4',
      innerCard: 'p-1/2',
      outerCardFirst: 'p-1/4 -bottom-1/4 -right-1/4',
      outerCardSecond: 'p-1/4 -bottom-1/2 -right-1/2'
    }
  }
  
  return (
    <div className={`aspect-ratio-${aspectRatio} relative`}>
      <div className={`absolute top-0 bottom-0 right-0 left-0 ${sizeBasedClasses[size].mainCard}`}>
        <div className="relative self-start h-full">
          <div className={`bg-white h-full relative ${sizeBasedClasses[size].innerCard} z-30 shadow-md`}>
            <div className="relative h-full">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <PreviewCompatibleImage image={image} className="h-full" />
              </div>
            </div>
          </div>
          <div className={`bg-white absolute w-full ${sizeBasedClasses[size].outerCardFirst} h-full z-20 shadow-md`}/>
          <div className={`bg-white absolute w-full ${sizeBasedClasses[size].outerCardSecond} h-full z-10 shadow-md`}/>
        </div>
      </div>
    </div>
    
  
  )
}
