import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
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
const StyledImage = styled(Img)`
  max-width: 500px;
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
const LeftP = styled.p`
  min-width: 50px;
  max-width: 350px;
  margin-top: 0;
`

const ContactUs = ({data}) => {
  return (
    <Layout title="We Hear You | Hands Free Door Opener">
      <StyledSection>
          <StyledWidthDiv>
            <h2>Push</h2>
            <LeftP>
            Formerly known as the Hands Free Door Opener, 
            We Hear You has developed a product that has the power to turn all accessible doors 
            into automatic doors from a safe distance with just the press of a personal button. 
            From a distance of up to 40 feet, an individual can press their personalized button 
            and enter a building with ease. 
            </LeftP>
            <LeftP>
            We Hear You aims to address a problem many individuals face when moving 
            through the world with mobility exceptionalities. This product also helps 
            individuals cognizant of germs, living a busy life, or whatever the circumstance.
            </LeftP>
          </StyledWidthDiv>
          <StyledWidthDiv>
            <StyledImage
              className=""
              fluid={data.pushLogo.edges[0].node.childImageSharp.fluid}
              alt="The push logo"
            />
          </StyledWidthDiv>
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
        <StyledH2>Product Launched</StyledH2>
        <CenterP>
        The Push device is currently in the manufacturing stage and ready for orders. 
        If you are interested in receiving more information, please contact us!
        </CenterP>
      </StyledSection2>
    </Layout>
  )
}

export const query = graphql`
  query {
    pushLogo: allFile(filter: { relativePath: { eq: "pushlogo_white.png" } }) {
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
export default ContactUs
