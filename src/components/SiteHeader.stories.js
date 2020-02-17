import React from "react"
import { storiesOf } from "@storybook/react"

import SiteHeader from "./SiteHeader"

storiesOf(`Dashboard/Header`, module).add(`default`, () => <SiteHeader />)
