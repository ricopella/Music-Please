import React from "react"
import SocialImg from "./image"

const Socials = () => (
  <div className="social_icons_container">
    <SocialLink
      filename="SC.png"
      title="SoundCloud"
      alt="SoundCloud - @themusicplease"
      link="https://soundcloud.com/themusicplease"
    />
    <SocialLink
      filename="IG.png"
      title="Instagram"
      alt="Instagram - @themusicplease"
      link="https://instagram.com/themusicplease"
    />
    <SocialLink
      filename="TW.png"
      title="TWitter"
      alt="Twitter - @themusicplease"
      link="https://twitter.com/themusicplease"
    />
    <SocialLink
      filename="FB.png"
      title="Facebook"
      alt="Facebook - @themusicplease"
      link="https://facebook.com/themusicplease"
    />
    <SocialLink
      filename="twitch2.png"
      title="Twitch"
      alt="Twitch - @themusicplease"
      link="https://www.twitch.tv/themusicplease"
    />
  </div>
)

const SocialLink = ({ filename, title, alt, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className={`social_icon ${title === "Twitch" ? "twitch" : ""}`}>
      <SocialImg filename={filename} title={title} alt={alt} />
    </div>
  </a>
)

export default Socials
