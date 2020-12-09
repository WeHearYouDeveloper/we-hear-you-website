import React from "react"
import { Link } from "gatsby"
import { withTheme } from "styled-components"

import { Box } from "rebass"

const Nav = props => {
  return (
    <>
      <Box
        width="100%"
        height="100px"
        bg="orange"
        sx={{ margin: 0 }}
      ></Box>
    </>
  )
}

export default withTheme(Nav)
