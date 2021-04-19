import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const StyledSection = styled.section`
  background: var(--heroOrange);
  display: block;
  min-height: 50vh;
  padding-top: 150px;

  @media only screen and (min-width: 1000px) {
    padding-top: 200px;
  }
`
const StyledSection2 = styled.section`
  background: var(--heroOrange);
  display: block;
  min-height: 30vh;
  padding-top: 100px;

  @media only screen and (min-width: 1000px) {
    padding-top: 100px;
  }
`
const StyledH2 = styled.h2`
  max-width: 500px;
`
const CenterP = styled.p`
  max-width: 600px;
`
const CenterPSmall = styled.p`
  max-width: 600px;
  font-size: .8em;
`
const StyledDiv = styled.div`
  width: 50%;
  min-width: 120px;
  max-width: 200px;
  background: var(--heroOrange);
  background-size: 200%;
  padding: 10px 0;
  display: inline-block;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  & + & {
    margin-left: 20px;
  }
`
const DivThin = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-weight: bold;
`
const DivThinSmall = styled.p`
  text-align: center;
  margin: 0;
  font-size: .8em;
`
const DivBold = styled.p`
  font-size: 3em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`
const FlexDiv = styled.div`
    display: flex;
    height: 100%;
    margin: 50px auto;
`
const StyledVideoSection = styled.section`
  background-color: lightGray;
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  padding-top: 0px;
  display: block;
`

const ContactUs = () => {
  return (
    <Layout title="We Hear You | Hands Free Door Opener">
      <StyledSection>
        <StyledH2>Hands Free Door Opener</StyledH2>
        <CenterP>
        We Hear You is developing a product that has the power to turn 
        all accessible doors into automatic doors from a safe distance, 
        with just the press of a personal button.
        </CenterP>
        <CenterP>
        We Hear You aims to address a problem many individuals face when 
        moving through the world with mobility exceptionalities. This product also 
        helps for individuals cognizant of germs, living a busy life, or whatever the circumstance. 
        </CenterP>       
      </StyledSection> 
      <StyledVideoSection>
          <iframe
            src="https://www.youtube.com/embed/lIYbL7TE2S4"
            title="We Hear You Hands Free Door Opener Prototype"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            width="100%"
            height="100%"
          />
        </StyledVideoSection>
        <StyledSection2> 
        <StyledH2>In Development</StyledH2>
        <CenterP>
        The Hands Free Door Opener is currently in the development stage. 
        We look forward to making it available for purchase in the near future!
        </CenterP>
        </StyledSection2> 

    </Layout>
  )
}

export default ContactUs
