import React from "react"

import ObviousLink from "./atoms/ObviousLink"
import Button from "./atoms/Button"
import { graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./atoms/PreviewCompatibleImage"

export default () => {
  return <StaticQuery
    query={graphql`
      query FooterQuery {
        WP {
          page(id: "cGFnZTo4OA==") {
            footerCta {
              ctaButtonLink {
                url
                title
                target
              }
              ctaButtonText
            }
            footerSocialLinks {
              fieldGroupName
              socialLink {
                socialIcon {
                  sourceUrl
                  imageFile {
                    publicURL
                  }
                }
                socialUrl
              }
            }
          }
        }
      }
    `}
    render={({WP: {page : {footerCta : {ctaButtonText, ctaButtonLink}, footerSocialLinks}}}) => {
      return (
        <footer className="bg-black-a100 text-gray-50 mt-auto py-6">
          <div className="grid container px-10 grid-flow-row gap-8 mx-auto sm:gap-0 sm:grid-flow-col gap items-center">
            <ObviousLink url={ctaButtonLink.url} className="w-full sm:w-64">
              <Button className="font-bold" color="white" textSize="md">{ctaButtonText}</Button>
            </ObviousLink>
            {/*<span className="font-sans tracking-widest text-xs font-semibold uppercase">*/}
            {/*  © 2020 Obvious*/}
            {/*</span>*/}
            <ul className="text-center grid justify-center gap-12 sm:gap-12 grid-flow-col items-center sm:justify-end">
              {footerSocialLinks.socialLink.map(link => <ObviousLink url={link.socialUrl}>
                <PreviewCompatibleImage className="fill-current h-4" image={link.socialIcon} />
              </ObviousLink>)}
            </ul>
          </div>
        </footer>
      )
    }}/>
}
