import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Socials from "../components/socials"

const IndexPage = () => (
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
      <div className="logoContainer">
        <a href="mailto:musicpleaseradio@gmail.com">
          <Image filename="PLEASE.png" alt="Music Please Main Logo" />
        </a>
      </div>
      <Socials />
    </div>
  </Layout>
)

export default IndexPage
