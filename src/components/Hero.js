import React from "react"
import { Heading } from "./Heading"
import { BodyText } from "./BodyText"
import classNames from "classnames"
import { ObviousGridRow } from "./atoms/ObviousGrid"

export default ({ title, subtitle }) => {
  const className = classNames(subtitle ? "mb-6" : "mb-18")
  return (
    <ObviousGridRow>
      <div className="col-span-12 md:col-span-8">
        <Heading type="h1" className={`${className} mt-18 lg:mt-24`}>
          {title}
        </Heading>
        {subtitle && (
          <BodyText type="subtitle-medium" className="mb-12 lg:mb-18">
            {subtitle}
          </BodyText>
        )}
      </div>
    </ObviousGridRow>
  )
}
