import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../SVGs/we-hear-you-flat.svg"

const StyledImg = styled.img`
  width: 200px;
  display: block;
  margin: auto;
`
const StyledLogoLink = styled(Link)`
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`
const StyledNav = styled.nav`
  min-height: 50px;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: 5;

  @media only screen and (max-width: 520px) {
    display: block;
  }
`
const StyledLinkButton = styled(Link)`
  border: 0px;
  font-weight: 300;
  text-decoration: none;

  @media only screen and (min-width: 200px) {
    background-color: transparent;
    padding: 0;
    color: var(--blue);

    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
    background-color: var(--blue);
    color: white;
    border-radius: 30px;

    &:hover {
      background: var(--heroBlue);
      text-decoration: none;
    }
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
  color: var(--blue);

  &:hover {
    text-decoration: underline;
  }
`
const StyledLi = styled.li`
  display: inline-block;

  & + & {
    margin-left: 30px;
  }
`
const StyledUl = styled.ul`
  padding-left: 0;
  display: block;
  text-align: center;

  @media only screen and (min-width: 200px) {
    margin-top: 20px;
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogoLink to="/">
        <StyledImg src={Logo} alt="We Hear You Logo" />
      </StyledLogoLink>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/pricing/">Pricing</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/about-us/">Who We Are</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLinkButton to="/contact-us/">Contact Us</StyledLinkButton>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}

export default Nav
