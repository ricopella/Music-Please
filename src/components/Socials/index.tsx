import { css } from "@emotion/core"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import React, { FC } from "react"
import styled from "../../styled"
import { BUTTON_ANIMATION, MEDIA_BREAKPOINTS } from "../../styles/constants"
import HeaderStyles from "../Header/Header.styles"
import SocialImg from "../Image"

const SocialLinkWrapper = css`
  height: auto;
  display: grid;
  align-content: center;
  justify-items: center;

  &:hover {
    cursor: pointer;
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
  width: 2.5rem;

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
  grid-template-columns: repeat(6, max-content);
  grid-gap: 0 0.75rem;

  @media (max-width: ${props => props.theme.media.s}) {
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1.5rem 2rem;
  }
`

const Socials = () => (
  <SocialsWrapper>
    <SocialLink
      fileName="insta.png"
      title="Instagram"
      alt="Instagram - @themusicplease"
      link="https://instagram.com/themusicplease"
      className="ig"
    />
    <SocialLink
      fileName="twitter.png"
      title="Twitter"
      alt="Twitter - @themusicplease"
      link="https://twitter.com/themusicplease"
      className="tw"
    />
    <SocialLink
      fileName="soundcloud.png"
      title="Soundcloud"
      alt="Soundcloud - @musicpleaseradio"
      link="https://soundcloud.com/themusicplease"
      className="soundcloud"
    />
    <SocialLink
      fileName="email.png"
      title="E-Mail"
      alt="E-Mail - info@themusicplease.com"
      link="mail:info@themusicplease.com"
      className="email"
    />
    <SocialLink
      fileName="mixcloud.png"
      title="Mixcloud"
      alt="Mixcloud - @musicpleaseradio"
      link="https://www.mixcloud.com/musicpleaseradio/"
      className="mixcloud"
    />
    <SocialLink
      fileName="shop.png"
      title="Shop"
      alt="Shop - Music Please Shop via Shopify"
      link="https://musicpleaseshop.myshopify.com/collections/all"
      className="mixcloud"
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
