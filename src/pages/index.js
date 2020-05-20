import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Socials from "../components/socials"
import styled from "@emotion/styled"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Footer from "../components/footer"

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  height: 100vh;
  width: 100vw;
`

const IndexPage = () => {
  return (
    <PageContainer>
      <SEO title="THE MUSIC PLEASE ONLINE" />
      <Layout>
        <div className="wrapper">
          <div className="logoContainer">
            <OutboundLink href="mailto:musicpleaseradio@gmail.com">
              <Image filename="PLEASE.png" alt="Music Please Main Logo" />
            </OutboundLink>
          </div>
          <Socials />
        </div>
      </Layout>
      <Footer />
    </PageContainer>
  )
}

export default IndexPage
