import { css } from '@emotion/core';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { FC } from 'react';
import styled from '../../styled';
import { BUTTON_ANIMATION, MEDIA_BREAKPOINTS } from '../../styles/constants';
import HeaderStyles from '../Header/Header.styles';
import SocialImg from '../Image';

const SocialLinkWrapper = css`
  // width: 3.75rem;
  height: auto;
  display: grid;
  align-content: center;
  justify-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${MEDIA_BREAKPOINTS.PHONE}) {
    // width: 2.75rem;
  }
`

const SocialContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-template-columns: 1fr;
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

const SocialsWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
`

const Socials = () => (
  <SocialsWrapper>
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
  </SocialsWrapper>
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
  <motion.div variants={HeaderStyles.MENU_ITEM_VARIANTS}>
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
  </motion.div>
)

export default Socials
