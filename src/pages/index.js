import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Socials from "../components/socials"
// import useTwitchLiveStreams from "../hooks/useTwitchLiveStream"
import LiveNow from "../components/livenow"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Footer from "../components/footer"
import { useWindowSize } from "react-use"

const LiveLink = styled(Link)`
  margin: 0 auto;
`

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: ${props => props.vh}px;
  width: 100vw;
`

const IndexPage = () => {
  // const [streams] = useTwitchLiveStreams()
  const { height } = useWindowSize()

  return (
    <PageContainer vh={height}>
      <SEO title="THE MUSIC PLEASE ONLINE" />
      <Layout>
        <div className="wrapper">
          {/*
            {(streams || []).length ? (
            <LiveLink to="/live">
              <LiveNow />
            </LiveLink>
          ) : null}
        */}
          <div className="logoContainer">
            <Image filename="PLEASE.png" alt="Music Please Main Logo" />
          </div>
          <Socials />
        </div>
      </Layout>
      <Footer />
    </PageContainer>
  )
}

export default IndexPage
