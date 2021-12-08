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
  font-size: 0.8em;
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
  font-size: 0.8em;
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

const AmericanSignLanguageTranslator = () => {
  return (
    <Layout title="We Hear You | American Sign Language (ASL) Translator">
      <StyledSection>
        <StyledH2>ASL Translator</StyledH2>
        <CenterP>
        The We Hear You American Sign Language (ASL) Translator has the capability 
        to turn hand signs into written text and speech as well as turn written or 
        spoken English back into ASL, which will help to remove the barrier for 
        many who use ASL at coffee shops, grocery stores, and concert venues.
        </CenterP>
        <CenterP>
        We Hear You aims to make the world easier to navigate for people who use ASL. 
        Follow our journey or reach out for more information!
        </CenterP>
      </StyledSection>
      <StyledVideoSection>
        <iframe
          src="https://www.youtube.com/embed/osdI_qWqLlo"
          title="We Hear You ASL Translator"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          width="100%"
          height="100%"
        />
      </StyledVideoSection>
      <StyledSection>
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
            <DivThinSmall>
              <em>(annual contract)</em>
            </DivThinSmall>
            <DivBold>$50</DivBold>
          </StyledDiv>
        </FlexDiv>
        <CenterP>
          *Applicable only for businesses making less than 1 million dollars
          annually.
        </CenterP>
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

export default AmericanSignLanguageTranslator
