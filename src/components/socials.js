import React from "react"
import SocialImg from "./image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { mediaBreakpoints } from "../styles/constants"

const SocialLinkWrapper = css`
  width: 7.5rem;
  height: auto;
  display: grid;
  align-content: center;
  justify-items: center;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${mediaBreakpoints.tablet}) {
    width: 4.5rem;
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
  width: 7.5rem;

  &.ig {
    width: 3rem;
  }

  &.twitch {
    width: 5rem;
  }

  &.email {
    width: 2.75rem;
  }

  &.live {
    width: 3.5rem;
  }

  &.fb {
    width: 2.5rem;
  }

  &.tw {
    width: 2.75rem;
  }

  // smaller desktop
  @media only screen and (max-width: ${mediaBreakpoints.smallDesktop}) {
    width: 7.75rem;

    &.twitch {
      width: 4rem;
    }

    &.live {
      width: 3rem;
    }

    &.email {
      width: 1.75rem;
    }
  }

  // tablet
  @media only screen and (max-width: ${mediaBreakpoints.tablet}) {
    width: 4rem;
    &.twitch {
      width: 3rem;
    }

    &.live {
      width: 2.25rem;
    }

    &.email {
      width: 1.75rem;
    }

    &.ig {
      width: 2rem;
    }

    &.tw {
      width: 2.25rem;
    }

    &.fb {
      width: 2rem;
    }
  }

  // mobile
  @media only screen and (max-width: ${mediaBreakpoints.phone}) {
    &.twitch {
      width: 2.5rem;
    }

    &.live {
      width: 2rem;
    }

    &.email {
      width: 1.75rem;
    }

    &.tw {
      width: 2rem;
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
        className="ig"
      />
      <SocialLink
        filename="TW1.png"
        title="TWitter"
        alt="Twitter - @themusicplease"
        link="https://twitter.com/themusicplease"
        className="tw"
      />
      <SocialLink
        filename="FB.png"
        title="Facebook"
        alt="Facebook - @themusicplease"
        link="https://facebook.com/themusicplease"
        className="fb"
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
