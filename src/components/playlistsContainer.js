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
      appleUrl={null}
      tidalUrl={null}
      spotifyUrl={"https://open.spotify.com/playlist/4WjwWtUtJzvLSpbqBZnr7q"}
      title={`In My Fuckin' Feelinz`}
    />
    <PlaylistCard
      filename="romance_de_rosas.jpg"
      alt="Romance De Rosas, a playlist by Be."
      appleUrl={null}
      tidalUrl={null}
      spotifyUrl={"https://open.spotify.com/playlist/41RkclkOwj16bmsQUfK1ua"}
      title={`Romance De Rosas`}
    />
    <PlaylistCard
      filename="sweet_tea.jpg"
      alt="Sweet Tea, a playlist by Be."
      appleUrl={null}
      tidal={null}
      spotifyUrl={"https://open.spotify.com/playlist/3BX6aS8VtYgxcddFK9nokp"}
      title={`Sweet Tea`}
    />
    <Link to="/" className="return">
      Return to home page
    </Link>
  </div>
)

const PlaylistCard = ({
  filename,
  alt,
  appleUrl,
  tidalUrl,
  spotifyUrl,
  title,
}) => (
  <div className="cardContainer">
    <h2>{title}</h2>
    <Image filename={filename} alt={alt} className="cardCover" />
    <div className="cardActionsWrapper">
      <Svg
        src={apple}
        className={!appleUrl ? "disabled" : null}
        link={appleUrl}
      />
      <Svg
        src={tidal}
        className={!tidalUrl ? "disabled" : null}
        link={tidalUrl}
      />
      <Svg
        src={spotify}
        className={!spotifyUrl ? "disabled" : null}
        link={spotifyUrl}
      />
    </div>
  </div>
)

const Svg = ({ src, className, link }) => (
  <a href={link}>
    <img src={src} className={className} />
  </a>
)

export default PlaylistContainer
