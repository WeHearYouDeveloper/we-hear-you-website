import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"

const FirstSection = styled.section`
  background: var(--heroOrange);
  padding-top: 100px;
  position: relative;

  @media only screen and (min-width: 1000px) {
    padding-top: 150px;
  }
`
const LeftP = styled.p`
  min-width: 50px;
  max-width: 350px;
  margin-top: 0;
`
const StyledH2 = styled.h2`
  margin-top: 50px;
`
const StyledH2Again = styled.h2`
  margin-bottom: 50px;
  max-width: 100%;
  text-align: center;
`
const StyledSection = styled.section`
  display: block;
`
const StyledSectionBlue = styled.section`
  display: block;
  background: var(--heroBlue);
  color: white;
`
const BioDiv = styled.div`
  @media only screen and (min-width: 1000px) {
    & + & {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`
const StyledImg = styled(Img)`
  width: 200px;
  display: block;
  margin: auto;
`
const StyledFlexDiv = styled.div`
  max-width: 500px;
  margin: auto;

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (min-width: 1000px) {
    max-width: 1300px;
  }
`
const MediumColumnBox = styled.div`
  & + & {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media only screen and (min-width: 1000px) {
    display: contents;
  }
`
const StyledUl = styled.ul`
  padding: 0;
`
const StyledLi = styled.li`
  font-weight: 700;
  list-style: none;
  color: white;

  & + & {
    margin-top: 15px;
  }
`
const StyledPierreImg = styled(Img)`
  @media only screen and (min-width: 1000px) {
    width: 50%;
    margin-left: auto;
  }
`
const StyledH3 = styled.h3`
  text-align: left;
  margin-bottom: 50px;
`

const AboutUs = ({ data }) => {
  return (
    <Layout title="We Hear You | About Us">
      <main>
        <FirstSection>
          <div>
            <StyledH2>Who We Are</StyledH2>
            <LeftP>
              We are a handful of individuals who believe diversity and
              inclusion should never be the afterthought of innovation. Instead,
              we know it should be the foundation.
            </LeftP>
          </div>
        </FirstSection>
        <section>
          <div>
            <h2>Founder and CEO</h2>
            <StyledH3>Pierre Paul</StyledH3>
            <LeftP>
              Pierre Paul is the founder and CEO of We Hear You. Pierre is a
              national public speaker, an avid social justice advocate, and was
              a finalist in the 2020 Bradley University Big Idea Competition.
              Pierre graduated in December 2019 with his Political Science
              degree and began his Masters degree in Non-Profit Leadership in
              January of 2020. He is currently completing a certificate with
              Cornell University for Diversity Inclusion. Battling poverty when
              his family first moved to the US fuels his drive to use his
              entrepreneurial skills to benefit the lives of others.
            </LeftP>
          </div>
          <StyledPierreImg fluid={data.pierre.edges[0].node.childImageSharp.fluid} alt="Pierre Paul stands next to a We Hear You banner" />
        </section>
        <StyledSectionBlue>
          <h2>Our Developers</h2>
          <LeftP>
            We partnered with Bradley University's Computer Science class of
            2020-2021 to develop the software that makes our application
            possible.
          </LeftP>
          <StyledUl>
            <StyledLi>Zack Seiple</StyledLi>
            <StyledLi>Daniel Shaw</StyledLi>
            <StyledLi>Erik Gonzalez</StyledLi>
            <StyledLi>Paul Kaske</StyledLi>
            <StyledLi>Joe Santoni</StyledLi>
            <StyledLi>Jerod Lockhart</StyledLi>
            <StyledLi>Evan Meyer</StyledLi>
          </StyledUl>
        </StyledSectionBlue>
        <StyledSection>
          <StyledH2Again>Staff</StyledH2Again>
          <StyledFlexDiv>
            <MediumColumnBox>
              <BioDiv>
                <StyledImg
                  fluid={data.bethanie.edges[0].node.childImageSharp.fluid}
                  alt="Bethanie Couri"
                />
                <h3>Bethanie Couri</h3>
                <h4>COO</h4>
              </BioDiv>
              <BioDiv>
                <StyledImg
                  fluid={data.matt.edges[0].node.childImageSharp.fluid}
                  alt="Matt Kirchoff"
                />
                <h3>Matt Kirchoff</h3>
                <h4>UI / UX Designer</h4>
              </BioDiv>
            </MediumColumnBox>
            <MediumColumnBox>
              <BioDiv>
                <StyledImg
                  fluid={data.ann.edges[0].node.childImageSharp.fluid}
                  alt="Ann Schnabel"
                />
                <h3>Ann Schnabel</h3>
                <h4>UX Engineer</h4>
              </BioDiv>
              <BioDiv>
                <StyledImg
                  fluid={data.zach.edges[0].node.childImageSharp.fluid}
                  alt="Zach Swords"
                />
                <h3>Zack Swords</h3>
                <h4>ASL Interpreter</h4>
              </BioDiv>
            </MediumColumnBox>
          </StyledFlexDiv>
        </StyledSection>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    david: allFile(filter: { relativePath: { eq: "david-brennan.png" } }) {
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
    bethanie: allFile(filter: { relativePath: { eq: "bethanie-couri.png" } }) {
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
    ann: allFile(filter: { relativePath: { eq: "ann-schnabel.png" } }) {
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
    matt: allFile(filter: { relativePath: { eq: "matt-kirchoff.png" } }) {
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
    zach: allFile(filter: { relativePath: { eq: "zach-swords.png" } }) {
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
    pierre: allFile(filter: { relativePath: { eq: "pierre-paul.jpg" } }) {
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

export default AboutUs
