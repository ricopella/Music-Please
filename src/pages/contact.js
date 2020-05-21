import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Component from "../components/contact.jsx"
import Footer from "../components/footer.jsx"
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
