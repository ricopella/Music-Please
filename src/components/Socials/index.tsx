import HeaderStyles from '../Header/Header.styles'
import React, { FC } from 'react'
import SocialImg from '../Image'
import styled from '../../styled'
import { AnimatePresence } from 'framer-motion'
import { BUTTON_ANIMATION, MEDIA_BREAKPOINTS } from '../../styles/constants'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/constants'

const SocialLinkWrapper = css`
  width: 3.75rem;
  height: auto;
  display: grid;
  align-content: center;
  justify-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${MEDIA_BREAKPOINTS.PHONE}) {
    width: 2.75rem;
  }
`

const SocialContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: center;
`

const SocialIcon = styled.div`
  width: 2rem;

  &.sc {
    width: 3.5rem;
  }
`

const AnimatedButton = styled(motion.button)`
  background: transparent;
  border: none;
`

const Socials = () => (
  <AnimatePresence>
    <SocialContainer
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        },
        closed: {
          opacity: 0,
          y: 30,
          transition: { delay: 0.25 },
        },
      }}
    >
      <SocialLink
        fileName="SC.png"
        title="SoundCloud"
        alt="SoundCloud - @themusicplease"
        link="https://soundcloud.com/themusicplease"
        className="sc"
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
  </AnimatePresence>
)

interface SocialLinkProps {
  alt: string
  className?: string
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
      <AnimatedButton {...BUTTON_ANIMATION}>
        <Link css={SocialLinkWrapper} to={link}>
          <SocialIcon className={`social_icon ${className}`}>
            <SocialImg fileName={fileName} title={title} alt={alt} />
          </SocialIcon>
        </Link>
      </AnimatedButton>
    ) : (
      <AnimatedButton {...BUTTON_ANIMATION}>
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
      </AnimatedButton>
    )}
  </>
)

export default Socials
