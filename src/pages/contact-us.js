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
const CenterP = styled.p`
  max-width: 400px;
`
const CenterPBold = styled.p`
  font-weight: 700;
  margin-bottom: 0;
`
const StyledAnchor = styled.a`
  color: var(--blue);

  &:hover {
    text-decoration: none;
  }
`

const ContactUs = () => {
  return (
    <Layout title="We Hear You | Contact Us">
      <StyledSection>
        <h2>Want to become a partner?</h2>
        <CenterP>
          We're always looking for ways to expand and better serve our users.
          Please let us know if you'd like to partner with We Hear You.
        </CenterP>
        <CenterPBold>Directly email our CEO at:</CenterPBold>
        <StyledAnchor href="mailto:wehearyouasl@gmail.com">
          WeHearYouASL@gmail.com
        </StyledAnchor>
      </StyledSection>
    </Layout>
  )
}

export default ContactUs
