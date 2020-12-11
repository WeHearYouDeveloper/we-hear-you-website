import React from "react"
import PropTypes from "prop-types"
import { withTheme } from 'styled-components'

import Nav from "./Nav"
import "./GlobalStyles.css"

const Layout = ({ children, nonHero }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(Layout)
