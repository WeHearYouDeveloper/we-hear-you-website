import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import Logo from "../images/we-hear-you-flat.svg"

const StyledImg = styled.img`
  width: 200px;
`
const StyledNav = styled.nav`
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`

const Nav = () => {
  return (
    <StyledNav>
      <StyledImg src={Logo} />
      <div>
          <button>Contact Us</button>
      </div>
    </StyledNav>
  )
}

export default withTheme(Nav)
