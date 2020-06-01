import CenteredLogo from '../../components/Logo/HeadingCentered'
import ContextProvider from '../../provider/ContextProvider'
import Header from '../../components/Header'
import HeaderStyles from '../../components/Header/Header.styles'
import Image from '../../components/Image'
import Layout from '../../components/Layout'
import React, { useState } from 'react'
import styled from '../../styled'
import Tidal from '../../images/svg/tidal.svg'
import { MIXES, PLAYLISTS } from './config'
import { motion } from 'framer-motion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/constants'

const SoundsContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  display: grid;
  grid-template-rows: max-content 1fr;
  max-width: 62.25rem;
  margin: 0 auto;
  margin-top: 5rem;
`

const LogoWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const SoundsHeading = styled.h2`
  color: ${props => props.theme.colors.secondary};
`

const PlaylistWrapper = styled.div`
  display: grid;
  gap: 1rem 3rem;
  grid-template-columns: repeat(3, max-content);
  position: relative;
  margin-top: 1rem;
`

const SoundItemWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: repeat(2, max-content);
  align-content: center;
  max-width: 15.625rem;
  width: 100%;
`

const SoundItemTitle = styled.p`
  text-align: center;
`
const PlaylistImage = styled.img`
  max-width: 15.625rem;
  height: auto;
  width: 100%;
`

const PlaylistDescriptionWrapper = styled(motion.div)`
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  width: 100%;
  height: 15.625rem;
  display: grid;
  grid-template-rows: calc(15.625rem - 32px) max-content;

  & p {
    padding: 1rem;
  }
`

const PlaylistLinksWrapper = styled(motion.ul)`
  display: grid;
  gap: 0 1rem;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  width: calc(100% - (1rem * 2));
`

const PlaylistLinksItem = styled(motion.li)``

const PlaylistLink = styled(OutboundLink)``

// MIXES
const MixesItemWrapper = styled(motion.div)`
  max-width: 15.625rem;
`

const MixesImage = styled.img`
  max-width: 15.625rem;
`

const MixesLinkWrapper = styled(motion.div)`
  display: grid;
  justify-content: center;
`

const MixesLink = styled(OutboundLink)``

const PAGE_TITLE = "SOUNDS"

const Sounds = () => {
  const [isHovered, setHovered] = useState({})
  const [isMixHovered, setMixHovered] = useState({})
  return (
    <ContextProvider>
      <Layout title={PAGE_TITLE}>
        <Header />
        <SoundsContainer>
          <LogoWrapper>
            <CenteredLogo />
          </LogoWrapper>
          <SoundsHeading>PLAYLISTS</SoundsHeading>
          <PlaylistWrapper>
            {PLAYLISTS.map((item, key) => (
              <SoundItemWrapper
                key={`sounds_playlist_item_${item.title}`}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                onMouseEnter={prev => setHovered({ ...prev, [key]: true })}
                onMouseLeave={prev => setHovered({ ...prev, [key]: false })}
              >
                <PlaylistImage
                  src={item.image}
                  style={{ opacity: isHovered ? `0.75` : 1 }}
                />
                <SoundItemTitle>{item.title}</SoundItemTitle>
                {isHovered[key] && (
                  <PlaylistDescriptionWrapper>
                    <p> {item.description}</p>

                    <PlaylistLinksWrapper
                      animate={isHovered[key] ? "open" : "closed"}
                      initial={"closed"}
                      variants={HeaderStyles.NAV_VARIANTS}
                    >
                      <PlaylistLinksItem
                        variants={HeaderStyles.MENU_ITEM_VARIANTS}
                      >
                        <PlaylistLink
                          href={item?.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            alt="Spotify"
                            fileName="spotify.png"
                            style={{ width: 24 }}
                          />
                        </PlaylistLink>
                      </PlaylistLinksItem>
                      <PlaylistLinksItem
                        variants={HeaderStyles.MENU_ITEM_VARIANTS}
                        style={{ backgroundColor: "white" }}
                      >
                        <Tidal
                          alt="Tidal"
                          style={{ width: 50, height: `auto` }}
                        />
                      </PlaylistLinksItem>
                    </PlaylistLinksWrapper>
                  </PlaylistDescriptionWrapper>
                )}
              </SoundItemWrapper>
            ))}
          </PlaylistWrapper>
          <SoundsHeading>MIXES</SoundsHeading>
          <PlaylistWrapper>
            {MIXES.map((item, key) => (
              <MixesItemWrapper
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                onMouseEnter={prev => setMixHovered({ ...prev, [key]: true })}
                onMouseLeave={prev => setMixHovered({ ...prev, [key]: false })}
              >
                <MixesImage src={item.image} />
                <SoundItemTitle>{item.title}</SoundItemTitle>
                {isMixHovered[key] && (
                  <MixesLinkWrapper {...SLIDE_IN_ANIMATION_OPTIONS}>
                    <MixesLink
                      href={item?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image fileName="SC.png" style={{ width: 60 }} />
                    </MixesLink>
                  </MixesLinkWrapper>
                )}
              </MixesItemWrapper>
            ))}
          </PlaylistWrapper>
        </SoundsContainer>
      </Layout>
    </ContextProvider>
  )
}

export default Sounds
