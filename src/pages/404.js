import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HeroSection = styled.section`
  min-height: 100vh;
  background: var(--heroOrange);
  padding-top: 100px;
  display: block;

  @media only screen and (min-width: 1000px) {
    padding-top: 150px;
  }
`

const NotFoundPage = () => (
  <Layout title="We Hear You | 404">
    <HeroSection>
      <h1>404: Not Found</h1>
      <p>Please click any link at the top to get back on track.</p>
    </HeroSection>
  </Layout>
)

export default NotFoundPage
