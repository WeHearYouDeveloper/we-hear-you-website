import React from "react"
import PropTypes from "prop-types"
import { withTheme } from 'styled-components'

import Nav from "./Nav"

const Layout = ({ theme, children, nonHero }) => {
  return (
    <>
      <Nav bg={nonHero && theme.colors.orange}/>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(Layout)
