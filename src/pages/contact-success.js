import React from "react"
import styled from "@emotion/styled"
import { COLORS } from "../styles/constants"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import SEO from "../components/seo"
import Footer from "../components/footer.jsx"
import Layout from "../components/layout"

const ContactSuccessContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const ContactContainer = styled.div`
  padding: 0 2rem 0 2rem;
  max-width: 31.25rem;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr max-content;
  align-content: center;
`

const ContactWrapper = styled.div`
  display: grid;
  align-content: center;
`

const ContactHeading = styled.h1`
  text-align: center;
`

const ContactP = styled.p`
  text-align: center;
`

const ContactSuccess = () => {
  return (
    <Layout>
      <ContactSuccessContainer>
        <SEO title={`CONTACT US - SUCCESS`} />
        <ContactContainer>
          <ContactWrapper>
            <ContactHeading>CONTACT US</ContactHeading>
            <ContactP>Thank you! We'll be in touch.</ContactP>
          </ContactWrapper>
          <Footer />
        </ContactContainer>
      </ContactSuccessContainer>
    </Layout>
  )
}

export default ContactSuccess
