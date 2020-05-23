import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Component from "../components/Contact"
import Footer from "../components/Footer"
import styled from "@emotion/styled"

const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr max-content;
`

const Contact = () => (
  <React.Fragment>
    <SEO title={`CONTACT US`} />
    <Layout>
      <ContactContainer>
        <Component />
        <Footer />
      </ContactContainer>
    </Layout>
  </React.Fragment>
)

export default Contact
