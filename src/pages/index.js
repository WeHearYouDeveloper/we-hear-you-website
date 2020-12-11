import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import hands from "../images/hands_for-web.jpg"

const HeroSection = styled.section`
  min-height: 100vh;
  box-sizing: border-box;
  background: var(--heroOrange);
  padding: 200px 100px 100px 100px;
  display: flex;
  align-items: center;
  justify-content: start;
`
const Subheader = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 10px;
`
const LeftP = styled.p`
  min-width: 50px;
  max-width: 350px;
  margin-top: 0;
`
const StyledWidthDiv = styled.div`
  width: 40%;
  margin-left: 50px;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <main>
        <HeroSection>
          <div>
            <h1>We Hear You</h1>
            <Subheader>A VOICE FOR ALL</Subheader>
            <h2>To be Understood</h2>
            <LeftP>
              We Hear You provides a solution to a common problem faced by
              individuals who are challenged by communication barriers.
            </LeftP>
          </div>
          <StyledWidthDiv>
          <Img
            fluid={data.hands.edges[0].node.childImageSharp.fluid}
            alt="hands reaching out"
          />
          </StyledWidthDiv>
        </HeroSection>
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
  }
`

export default IndexPage
