import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Image from "../components/Image"
import Socials from "../components/Socials"
import styled from "@emotion/styled"
import Footer from "../components/Footer"
import Bouncy from "../images/gif/BOUNCY.gif"

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-image: url(${Bouncy});
  background-size: cover;
`

const IndexPage = () => {
  return (
    <PageContainer>
      <SEO title="THE MUSIC PLEASE ONLINE" />
      <Layout>
        <div className="wrapper">
          <div className="logoContainer">
            <Image
              filename="no_BG_MUSICPLEASE.png"
              alt="Music Please Main Logo"
            />
          </div>
          <Socials />
        </div>
      </Layout>
      <Footer />
    </PageContainer>
  )
}

export default IndexPage
