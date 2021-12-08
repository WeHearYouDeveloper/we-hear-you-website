import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

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
  max-width: 300px;

  margin-left: 30px;
  margin-right: 30px;
`
const StyledImg = styled(Img)`
  width: 200px;
  display: block;
  margin: auto;
`
const StyledFlexDiv = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 1000px) {
    max-width: 1300px;
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
const Bio = styled.p`
  margin-bottom: 50px;
  text-align: justify;
  text-justify: inter-word;
`

const AboutUs = ({ data }) => {
  return (
    <Layout title="We Hear You | About Us">
      <main>
        <FirstSection>
          <div>
            <StyledH2>Who We Are</StyledH2>
            <LeftP>
              We are a handful of individuals who believe diversity and inclusion should never be 
              the afterthought of innovation. Instead, we know it should be the foundation.
            </LeftP>
          </div>
        </FirstSection>
        <section>
          <div>
            <h2>Founder and CEO</h2>
            <StyledH3>Pierre Paul</StyledH3>
            <LeftP>
              Pierre Paul is the founder and CEO of We Hear You. Pierre mentors underprivileged 
              children in the community, is a nationally ranked public speaker, and uses his 
              voice to be an avid social justice advocate. He was awarded first place in the 2020 
              Bradley University Big Idea Competition with his company We Hear You®. Pierre 
              graduated in December 2019 with his Political Science degree and will complete 
              his Masters in May of 2021. He has also earned a certificate from eCornell in 
              Diversity and Inclusion. Battling poverty when his family first moved to the US 
              fuels his drive to use his entrepreneurial skills to benefit the lives of others.
            </LeftP>
          </div>
          <StyledPierreImg
            fluid={data.pierre.edges[0].node.childImageSharp.fluid}
            alt="Pierre Paul stands next to a We Hear You banner"
          />
        </section>
        <StyledSection>
          <StyledH2Again>Team</StyledH2Again>
          <StyledFlexDiv>
            <BioDiv>
              <StyledImg
                fluid={data.bethanie.edges[0].node.childImageSharp.fluid}
                alt="Bethanie Couri"
              />
              <h3>Bethanie Couri</h3>
              <h4>Chief Operating Officer</h4>
              <Bio>
                Twenty five year old, Bethanie Couri, brings a unique
                perspective to the team as she comes from a long line of
                successful entrepreneurial individuals. She received her
                Bachelor of Science in Marketing and her Masters in Business
                Administration. She is passionate about creating a brighter
                world around her and bringing harmony to a disharmonious world.
                Growing up in a family business and learning the value of giving
                to others, she firmly believes in the power of helping others
                without seeking recognition.
              </Bio>
            </BioDiv>
            <BioDiv>
              <StyledImg
                fluid={data.matt.edges[0].node.childImageSharp.fluid}
                alt="Matt Kirchoff"
              />
              <h3>Matt Kirchoff</h3>
              <h4>Cheif Design Officer</h4>
              <Bio>
                Matthew Kirchoff is a Game and Software Design and Developer
                with a background in User Experience Design. Matt graduated from
                Bradley University in May 2021 with a Bachelor of Science in
                Game Design. Matthew will be pursuing a Masters of Science in
                Game Development at Bradley University following graduation.
                Matthew also assists with other various projects and causes
                such as the design and development of local non-profit
                organizations’ websites.
              </Bio>
            </BioDiv>
            <BioDiv>
              <StyledImg
                fluid={data.jessica.edges[0].node.childImageSharp.fluid}
                alt="Jessica Lang"
              />
              <h3>Jessica Lang</h3>
              <h4>Vice President of Community Engagement</h4>
              <Bio>
                Jessica Is a Human Resource Specialist from Peoria, Illinois.
                She became deaf shortly after birth. At the age of two, American
                Sign Language became her first language. She believes that being
                an advocate for inclusiveness and accessibility in the deaf
                community will create a better integration and raise awareness
                of deaf culture, sign language, communication accessibility, and
                content accessibility. She believes that communication barriers
                are one of the biggest challenges and a common issue in a social
                setting for thousands of deaf and hard of hearing people.
              </Bio>
            </BioDiv>
            <BioDiv>
              <StyledImg
                fluid={data.ann.edges[0].node.childImageSharp.fluid}
                alt="Ann Schnabel"
              />
              <h3>Ann Schnabel</h3>
              <h4>UX Engineer</h4>
              <Bio>
                Ann Schnabel currently works full-time as a User Experience
                Engineer in Indianapolis. Her latest venture involves starting a
                web design agency called Vertical Soup. Through Vertical Soup,
                she and her best friend, Ari Newhouse, create custom websites
                for small businesses in the United States. While they don’t have
                a website of their own yet, they work every day to craft
                user-centered designs for their clients.
              </Bio>
            </BioDiv>
            <BioDiv>
              <StyledImg
                fluid={data.zach.edges[0].node.childImageSharp.fluid}
                alt="Zach Swords"
              />
              <h3>Zach Swords</h3>
              <h4>ASL Interpreter</h4>
              <Bio>
                Zach Swords is a local central Illinois native, an aspiring ASL
                interpreter, and works for a Non for Profit Organization known
                as Mended Hearts Stable Inc. He serves as a volunteer, stable
                hand, projects assistant, and looks to further his education. He
                has served the local deaf community in multiple volunteer
                aspects throughout his career to provide Sign Language
                Interpreting services where they are not being provided for the
                community.
              </Bio>
            </BioDiv>
            <BioDiv>
              <StyledImg
                fluid={data.brandon.edges[0].node.childImageSharp.fluid}
                alt="Brandon Michael"
              />
              <h3>Brandon Michael</h3>
              <h4>ASL Interpreter</h4>
              <Bio>
                Brandon is an American Sign Language interpreter, as well as a
                Deaf Community advocate and ally. Brandon has worked within the
                Deaf/Hard of Hearing community in a number of roles. Within the
                interpreting profession, Brandon has worked in educational,
                performance, video relay, and community settings. He studied the
                culture and community in depth throughout college while
                obtaining his bachelor's degree from Towson University in
                Towson, Maryland. Aside from his passion for the Deaf Community
                and Culture, Brandon has a love for connecting, impacting, and
                inspiring those to find what they believe in, and live in that
                belief.
              </Bio>
            </BioDiv>
          </StyledFlexDiv>
        </StyledSection>
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
            <StyledLi>Adam Byerly</StyledLi>
            <StyledLi>David Brennan</StyledLi>
          </StyledUl>
        </StyledSectionBlue>
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
    brandon: allFile(filter: { relativePath: { eq: "brandon-michael.png" } }) {
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
    jessica: allFile(filter: { relativePath: { eq: "jessica-lang.png" } }) {
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
