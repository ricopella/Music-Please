import React from "react"
import SocialImg from "./image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const SocialLinkWrapper = css`
  width: 8.5rem;
  height: auto;
  display: grid;
  align-content: center;
  justify-items: center;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 48rem) {
    width: 5rem;
  }
`

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
`

const SocialContainerLower = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
`

const SocialIcon = styled.div`
  width: 8.5rem;

  &.twitch {
    width: 5rem;
  }

  &.email {
    width: 4.5rem;
  }

  &.live {
    width: 3.5rem;
  }

  // smaller desktop
  @media only screen and (max-width: 68.75rem) {
    width: 7.75rem;

    &.twitch {
      width: 4rem;
    }

    &.live {
      width: 3rem;
    }

    &.email {
      width: 4rem;
    }
  }

  // tablet
  @media only screen and (max-width: 48rem) {
    width: 5rem;
    &.twitch {
      width: 3rem;
    }

    &.live {
      width: 2.25rem;
    }

    &.email {
      width: 2.75rem;
    }
  }

  // mobile
  @media only screen and (max-width: 25.875rem) {
    &.twitch {
      width: 2.5rem;
    }

    &.live {
      width: 2rem;
    }

    &.email {
      width: 2.25rem;
    }
  }
`

const Socials = () => (
  <>
    <SocialContainer>
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
    </SocialContainer>
    <SocialContainerLower>
      <SocialLink
        filename="twitch2.png"
        title="Twitch"
        alt="Twitch - @themusicplease"
        link="https://www.twitch.tv/themusicplease"
        className="twitch"
      />
      <SocialLink
        filename="live.png"
        title="Live"
        alt="Live Broadcast"
        className="live"
        link="/live"
        internal
      />
      <SocialLink
        filename="email.png"
        title="E-Mail"
        alt="Email = musicpleaseradio@gmail.com"
        link="mailto:musicpleaseradio@gmail.com"
        className="email"
      />
    </SocialContainerLower>
  </>
)

const SocialLink = ({
  filename,
  title,
  alt,
  link,
  className = "",
  internal = false,
}) => (
  <>
    {internal ? (
      <Link css={SocialLinkWrapper} to={link}>
        <SocialIcon className={`social_icon ${className}`}>
          <SocialImg filename={filename} title={title} alt={alt} />
        </SocialIcon>
      </Link>
    ) : (
      <OutboundLink
        css={SocialLinkWrapper}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon className={`social_icon ${className}`}>
          <SocialImg filename={filename} title={title} alt={alt} />
        </SocialIcon>
      </OutboundLink>
    )}
  </>
)

export default Socials
