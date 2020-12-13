import React from "react"
import PropTypes from "prop-types"
import { withTheme } from 'styled-components'

import Nav from "./Nav"
import Footer from "./Footer"
import SEO from "./seo"
import "./GlobalStyles.css"

const Layout = ({ children, nonHero, title }) => {
  return (
    <div style={{overflowX: "hidden",}}>
      <SEO title={title}/>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTheme(Layout)
