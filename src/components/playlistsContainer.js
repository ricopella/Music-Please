import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import tidal from "../images/Tidal.svg"
import apple from "../images/apple.svg"
import spotify from "../images/spotify.svg"

import "./playlistsContainer.css"

const PlaylistContainer = () => (
  <div className="playlistsContainer">
    <PlaylistCard
      filename="feelz.jpg"
      alt="In My Fuckin Feelz, a playlist by Be."
    />
    <PlaylistCard
      filename="romance_de_rosas.jpg"
      alt="Romance De Rosas, a playlist by Be."
    />
    <PlaylistCard filename="sweet_tea.jpg" alt="Sweet Tea, a playlist by Be." />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

const PlaylistCard = ({ filename, alt }) => (
  <div className="cardContainer">
    <Image filename={filename} alt={alt} className="cardCover" />
    <div className="cardActionsWrapper">
      <img src={apple} />
      <img src={tidal} />
      <img src={spotify} />
    </div>
  </div>
)

export default PlaylistContainer
