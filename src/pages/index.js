import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const HeroSection = styled.section`
  min-height: 100vh;
  background: var(--heroOrange);
  padding: 100px;
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

const IndexPage = () => (
  <Layout>
    <main>
      <HeroSection>
        <Subheader>A VOICE FOR ALL</Subheader>
        <h2>To be Understood</h2>
        <LeftP>
          We Hear You provides a solution to a common problem faced by
          individuals who are challenged by communication barriers.
        </LeftP>
      </HeroSection>
    </main>
  </Layout>
)

export default IndexPage
