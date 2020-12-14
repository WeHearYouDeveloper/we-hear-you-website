import React from "react"
import styled from "styled-components"

import logo from "../SVGs/logo-original-white-11.svg"

const StyledFooter = styled.footer`
  background: var(--heroBlue);
  padding: 50px 20px 20px 20px;

  @media only screen and (min-width: 1000px) {
    padding: 50px 50px 20px 50px;
  }
`
const StyledFlexDiv = styled.div`
  @media only screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }
`
const StyledCaption = styled.p`
  font-size: 0.8em;
  color: white;
  text-align: center;

  @media only screen and (min-width: 700px) {
    text-align: right;
  }
`
const StyledLogoImg = styled.img`
  width: 100px;
  display: block;
  margin: auto;

  @media only screen and (min-width: 700px) {
    margin: 0;
  }
`

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <StyledFooter>
      <StyledFlexDiv>
        <StyledLogoImg src={logo} alt="We Hear You Original Logo TM" />
        <StyledCaption>
          &copy; {date} We Hear You, LLC. All rights reserved.
        </StyledCaption>
      </StyledFlexDiv>
    </StyledFooter>
  )
}

export default Footer
