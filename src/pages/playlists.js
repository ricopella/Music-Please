import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import PlaylistContainer from "../components/playlistsContainer"
import SEO from "../components/seo"

const Playlists = () => (
  <Layout
    style={{ width: "100vw", alignContent: "center", justifyItems: "center" }}
  >
    <SEO title="Page two" />
    <h1 style={{ color: "white" }}>Playlists</h1>
    <PlaylistContainer />
  </Layout>
)

export default Playlists
