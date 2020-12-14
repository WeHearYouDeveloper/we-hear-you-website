import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import abstract from "../SVGs/abstracted-fingers-03.svg"
import logoHand from "../SVGs/logo-image-04.svg"
import chevronDown from "../SVGs/chevron-down-05.svg"

const HeroSection = styled.section`
  min-height: 100vh;
  background: var(--heroOrange);
  padding-top: 100px;
  position: relative;

  @media only screen and (min-width: 1000px) {
    padding-top: 150px;
  }
`
const Subheader = styled.p`
  @media only screen and (min-width: 200px) {
    font-size: 1em;
    font-weight: 700;
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1000px) {
    font-size: 1.5em;
  }
`
const LeftP = styled.p`
  min-width: 50px;
  max-width: 350px;
  margin-top: 0;
`
const StyledWidthDiv = styled.div`
  position: relative;
  z-index: 2;

  @media only screen and (min-width: 200px) {
    width: 100%;
  }

  @media only screen and (min-width: 1000px) {
    width: 50%;
  }
`
const StyledAbstractSVG = styled.img`
  position: absolute;
  height: 90vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  margin-left: 20px;
`
const RightP = styled.p`
  min-width: 50px;
  max-width: 350px;
  margin-top: 0;
`
const StyledHandImg = styled.img`
  height: 50vh;
  width: 100%;
  margin: auto;
`
const ScrollDown = styled.p``
const StyledFlexLink = styled(AnchorLink)`
  display: flex;
  align-items: center;
  width: 150px;
  color: var(--blue);
  text-decoration: none;
  position: relative;
  z-index: 2;

  @media only screen and (min-width: 1000px) {
    position: absolute;
    bottom: 45px;
    left: 100px;
  }
`
const StyledChevronImg = styled.img`
  width: 14px;
  margin-right: 10px;
`
const StyledVideoSection = styled.section`
  background-color: lightGray;
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  padding-top: 0px;
  display: block;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout title="We Hear You | Who We Are">
      <main>
        <HeroSection>
          <StyledAbstractSVG
            src={abstract}
            alt="abstract design that resembles hand"
          />
          <StyledWidthDiv>
            <h1>We Hear You</h1>
            <Subheader>A VOICE FOR ALL</Subheader>
            <h2>To be Understood</h2>
            <LeftP>
              We Hear You provides a solution to a common problem for
              individuals faced with communication barriers.
            </LeftP>
          </StyledWidthDiv>
          <StyledWidthDiv>
            <Img
              className="mobileDisappear"
              fluid={data.hands.edges[0].node.childImageSharp.fluid}
              alt="hands reaching out"
            />
          </StyledWidthDiv>
          <StyledFlexLink to="/#learn-more">
            <StyledChevronImg src={chevronDown} alt="chevron-down" />
            <ScrollDown>Learn more</ScrollDown>
          </StyledFlexLink>
        </HeroSection>
        <section>
          <StyledWidthDiv>
            <StyledHandImg
              className="mobileDisappear"
              src={logoHand}
              alt="hand from logo image"
            />
          </StyledWidthDiv>
          <StyledWidthDiv id="learn-more">
            <h2>
              Sign Language
              <br />
              Translated Live
            </h2>
            <RightP>
              We Hear You is an application that translates American Sign
              Language into spoken English through the use of newly developed
              gesture-recognition technology.
            </RightP>
            <RightP>
              We Hear You will solve the problem many individuals face when
              wanting to partake in everyday life but are met with
              communication barriers.
            </RightP>
          </StyledWidthDiv>
        </section>
        <StyledVideoSection>
          <iframe
            src="https://www.youtube.com/embed/idaldLMjP2E"
            title="We Hear You Prototyped"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            width="100%"
            height="100%"
          />
        </StyledVideoSection>
        <section>
          <StyledWidthDiv>
            <h2>Launching Soon</h2>
            <LeftP>
              Our pilot program's goal is to achieve fluid conversations between
              a customer and barista so the customer may effectively communicate
              an order. This pilot program will launch December of 2020 at The
              Spot Coffee in Peoria, IL. The Spot Coffee values inclusivity
              above all else and was overjoyed to help bring accommodations to
              those with hearing exceptionalities.
            </LeftP>
          </StyledWidthDiv>
          <StyledWidthDiv>
            <Img
              className="mobileDisappear"
              fluid={data.spot.edges[0].node.childImageSharp.fluid}
              alt="The Spot Coffee coffee cup"
            />
          </StyledWidthDiv>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    hands: allFile(filter: { relativePath: { eq: "hands_for-web.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    spot: allFile(filter: { relativePath: { eq: "spot-coffee.jpg" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
