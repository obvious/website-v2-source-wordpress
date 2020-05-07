import React from "react"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"

export default ({ colophon }) => {
  return (
    <>
      <Heading type="h5" className="text-light/gray-10 mt-8 border-b border-light/gray-50 pb-2 mb-2">
        Colophon
      </Heading>
      {colophon.map((credit, index) => (
        <div key={index}>
          <BodyText type="credit">
            {credit.nameoffield}&nbsp;
          </BodyText>
          {credit.personresponsible[0] && <span className="font-sans uppercase text-orange-50 text-xs font-medium">
            {credit.personresponsible[0].title}
          </span>}
        </div>
      ))}
    </>
  )
}
