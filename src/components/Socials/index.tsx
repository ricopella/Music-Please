import React, { FC } from 'react'
import SocialImg from '../Image'
import styled from '../../styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import {
  MEDIA_BREAKPOINTS,
  SLIDE_IN_ANIMATION_OPTIONS,
} from "../../styles/constants"

const SocialLinkWrapper = css`
  width: 7.5rem;
  height: auto;
  display: grid;
  align-content: center;
  justify-items: center;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${MEDIA_BREAKPOINTS.TABLET}) {
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
  @media only screen and (max-width: ${props => props.theme.media.l}) {
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
  @media only screen and (max-width: ${props => props.theme.media.m}) {
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
  @media only screen and (max-width: ${props => props.theme.media.s}) {
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
  <motion.div {...SLIDE_IN_ANIMATION_OPTIONS}>
    <SocialContainer>
      <SocialLink
        fileName="SC.png"
        title="SoundCloud"
        alt="SoundCloud - @themusicplease"
        link="https://soundcloud.com/themusicplease"
      />
      <SocialLink
        fileName="IG.png"
        title="Instagram"
        alt="Instagram - @themusicplease"
        link="https://instagram.com/themusicplease"
        className="ig"
      />
      <SocialLink
        fileName="TW1.png"
        title="TWitter"
        alt="Twitter - @themusicplease"
        link="https://twitter.com/themusicplease"
        className="tw"
      />
      <SocialLink
        fileName="FB.png"
        title="Facebook"
        alt="Facebook - @themusicplease"
        link="https://facebook.com/themusicplease"
        className="fb"
      />
    </SocialContainer>
    <SocialContainerLower>
      <SocialLink
        fileName="twitch2.png"
        title="Twitch"
        alt="Twitch - @themusicplease"
        link="https://www.twitch.tv/themusicplease"
        className="twitch"
      />
      <SocialLink
        fileName="live.png"
        title="Live"
        alt="Live Broadcast"
        className="live"
        link="/live"
        internal
      />
      <SocialLink
        fileName="email.png"
        title="Contact Us"
        alt="Contact Us"
        link="/contact"
        className="email"
        internal
      />
    </SocialContainerLower>
  </motion.div>
)

interface SocialLinkProps {
  alt: string
  classNam?: string
  fileName: string
  internal?: boolean
  link: string
  title: string
}

const SocialLink: FC<SocialLinkProps> = ({
  alt,
  className = "",
  fileName,
  internal = false,
  link,
  title,
}) => (
  <>
    {internal ? (
      <Link css={SocialLinkWrapper} to={link}>
        <SocialIcon className={`social_icon ${className}`}>
          <SocialImg fileName={fileName} title={title} alt={alt} />
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
          <SocialImg fileName={fileName} title={title} alt={alt} />
        </SocialIcon>
      </OutboundLink>
    )}
  </>
)

export default Socials
