import React from "react"
import Layout from "../components/layout"
import PlaylistContainer from "../components/playlistsContainer"
import SEO from "../components/seo"

const Playlists = () => (
  <Layout
    style={{ width: "100vw", alignContent: "center", justifyItems: "center" }}
  >
    <SEO title="Page two" />
    <h1 style={{ color: "white", fontSize: "3rem" }}>Playlists</h1>
    <PlaylistContainer />
  </Layout>
)

export default Playlists
