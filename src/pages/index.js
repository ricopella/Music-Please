import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Socials from "../components/socials"
import useTwitchLiveStreams from "../hooks/useTwitchLiveStream"
import LiveNow from "../components/livenow"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const LiveLink = styled(Link)`
  margin: 0 auto;
`

const IndexPage = () => {
  const [streams] = useTwitchLiveStreams()

  return (
    <Layout>
      <SEO
        title="Music Please."
        keywords={[
          `music please`,
          `dj`,
          `deejay`,
          `radio`,
          `recording`,
          `live performance`,
          `production`,
          `mixes`,
          `show`,
        ]}
      />
      <div className="wrapper">
        {(streams || []).length ? (
          <LiveLink to="/live">
            <LiveNow />
          </LiveLink>
        ) : null}
        <div className="logoContainer">
          <a href="mailto:musicpleaseradio@gmail.com">
            <Image filename="PLEASE.png" alt="Music Please Main Logo" />
          </a>
        </div>
        <Socials />
      </div>
    </Layout>
  )
}

export default IndexPage
