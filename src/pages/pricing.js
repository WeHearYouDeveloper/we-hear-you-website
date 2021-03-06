import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const StyledSection = styled.section`
  background: var(--heroOrange);
  display: block;
  min-height: 100vh;
  padding-top: 150px;

  @media only screen and (min-width: 1000px) {
    padding-top: 200px;
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

const ContactUs = () => {
  return (
    <Layout title="We Hear You | Sign Language Translator">
      <StyledSection>
        <StyledH2>Sign Language Translator</StyledH2>
        <StyledH2>Pricing</StyledH2>
        <CenterP>
          While we do not currently supply hardware for the We Hear You
          software, we will work with businesses on acquiring the necessary
          tablet/equipment for use of software.
        </CenterP>
        <FlexDiv>
          <StyledDiv>
            <DivThin>First month</DivThin>
            <DivBold>$0</DivBold>
          </StyledDiv>
          <StyledDiv>
            <DivThin>Each month thereafter</DivThin>
            <DivThinSmall><em>(annual contract)</em></DivThinSmall>
            <DivBold>$50</DivBold>
          </StyledDiv>
        </FlexDiv>
        <CenterPSmall>
          All money spent through We Hear You is eligible for an{" "}
          <strong>ADA tax credit</strong>. When businesses make accommodations
          for these individuals, they are entitled by the Internal Revenue
          Service to a <strong>50% tax credit</strong> that “can be used to
          offset the cost of undertaking barrier removal and alterations to
          improve accessibility.” This tax credit is allowed for up to $10,250
          each year.
        </CenterPSmall>
      </StyledSection>
    </Layout>
  )
}

export default ContactUs
