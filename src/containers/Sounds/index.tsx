import CenteredLogo from '../../components/Logo/HeadingCentered'
import ContextProvider from '../../provider/ContextProvider'
import Header from '../../components/Header'
import HeaderStyles from '../../components/Header/Header.styles'
import Image from '../../components/Image'
import Layout from '../../components/Layout'
import React, { useState } from 'react'
import styled from '../../styled'
import Tidal from '../../images/svg/tidal.svg'
import { createBreakpoint } from 'react-use'
import { ItemImageVariants, MIXES, PLAYLISTS } from './config'
import { motion } from 'framer-motion'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { SLIDE_IN_ANIMATION_OPTIONS } from '../../styles/constants'

const useBreakpoint = createBreakpoint()

const SoundsContainer = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  height: 100%;
  margin-top: 5rem;
  margin: 0 auto;
  max-width: 62.25rem;
  min-height: 100%;
  padding: 4rem 2rem;
  width: 100%;
  grid-row-gap: 2rem;
`

const SoundsBody = styled.section`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`

const SoundsGroup = styled.div`
  display: grid;
  grid-template-rows: max-content: 1fr;

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
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  margin-top: 1rem;

  @media (max-width: 56.875rem) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }

  @media (max-width: 39.375rem) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
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
  opacity: 1;
`
const PlaylistImage = styled(motion.img)`
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
  height: 100%;
  display: grid;
  grid-template-rows: 12.5rem max-content;

  & p {
    padding: 1rem;
  }

  @media (max-width: ${props => props.theme.media.s}) {
    display: none;
  }
`

const PlaylistLinksWrapper = styled(motion.ul)`
  display: grid;
  gap: 0 1rem;
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  width: calc(100% - (1rem * 2));
  list-style-type: none;
`

const MobileOnlyPlaylistLinksWrapper = styled(PlaylistLinksWrapper)`
  display: none;
  @media (max-width: ${props => props.theme.media.s}) {
    display: grid;
  }
`

const PlaylistLinksItem = styled(motion.li)<{ disabled?: boolean }>`
  align-self: center;
  margin-bottom: 0;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`

const PlaylistLink = styled(OutboundLink)``

// MIXES
const MixesItemWrapper = styled(motion.div)`
  max-width: 15.625rem;
`

const MixesImage = styled(motion.img)`
  max-width: 15.625rem;
`

const MixesLinkWrapper = styled(motion.div)`
  display: grid;
  justify-content: center;
`

const MobileOnlyMixesLinkWrapper = styled(MixesLinkWrapper)`
  display: none;
  @media (max-width: ${props => props.theme.media.s}) {
    display: grid;
  }
`

const MixesLink = styled(OutboundLink)``

const PAGE_TITLE = "SOUNDS"

const Sounds = () => {
  const breakpoint = useBreakpoint()
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
          <SoundsBody>
            <SoundsGroup>
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
                      animate={isHovered ? "visible" : "hidden"}
                      {...ItemImageVariants}
                    />
                    <SoundItemTitle>{item.title}</SoundItemTitle>
                    {isHovered[key] && (
                      <PlaylistDescriptionWrapper
                        animate={"visible"}
                        exit="hidden"
                        initial={"hidden"}
                        variants={{
                          exit: {
                            opacity: 0,
                            y: 30,
                          },
                          visible: {
                            opacity: 0.8,
                            y: 0,
                          },
                          hidden: {
                            opacity: 0,
                            y: 30,
                          },
                        }}
                      >
                        <p> {item.description}</p>
                        <PlaylistLinksWrapper
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
                          >
                            <PlaylistLink
                              href={item?.tidal}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                alt="tidal"
                                fileName="tidal.png"
                                style={{ width: 24 }}
                              />
                            </PlaylistLink>
                          </PlaylistLinksItem>
                          <PlaylistLinksItem
                            variants={HeaderStyles.MENU_ITEM_VARIANTS}
                            disabled={true}
                          >
                            <Image
                              alt="apple"
                              fileName="apple.png"
                              style={{ width: 24 }}
                            />
                          </PlaylistLinksItem>
                        </PlaylistLinksWrapper>
                      </PlaylistDescriptionWrapper>
                    )}
                    <MobileOnlyPlaylistLinksWrapper
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
                      >
                        <PlaylistLink
                          href={item?.tidal}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            alt="tidal"
                            fileName="tidal.png"
                            style={{ width: 24 }}
                          />
                        </PlaylistLink>
                      </PlaylistLinksItem>
                      <PlaylistLinksItem
                        variants={HeaderStyles.MENU_ITEM_VARIANTS}
                        disabled={true}
                      >
                        <Image
                          alt="apple"
                          fileName="apple.png"
                          style={{ width: 24 }}
                        />
                      </PlaylistLinksItem>
                    </MobileOnlyPlaylistLinksWrapper>
                  </SoundItemWrapper>
                ))}
              </PlaylistWrapper>
            </SoundsGroup>
            <SoundsGroup>
              <SoundsHeading>MIXES</SoundsHeading>
              <PlaylistWrapper>
                {MIXES.map((item, key) => (
                  <MixesItemWrapper
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 1 },
                    }}
                    onMouseEnter={prev =>
                      setMixHovered({ ...prev, [key]: true })
                    }
                    onMouseLeave={prev =>
                      setMixHovered({ ...prev, [key]: false })
                    }
                  >
                    <MixesImage src={item.image} />
                    <SoundItemTitle>{item.title}</SoundItemTitle>
                    {isMixHovered[key] && (
                      <PlaylistDescriptionWrapper>
                        <p>A description will go here...</p>
                        <MixesLinkWrapper {...SLIDE_IN_ANIMATION_OPTIONS}>
                          <MixesLink
                            href={item?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image fileName="SC.png" style={{ width: 60 }} />
                          </MixesLink>
                        </MixesLinkWrapper>
                      </PlaylistDescriptionWrapper>
                    )}
                    <MobileOnlyMixesLinkWrapper {...SLIDE_IN_ANIMATION_OPTIONS}>
                      <MixesLink
                        href={item?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image fileName="SC.png" style={{ width: 60 }} />
                      </MixesLink>
                    </MobileOnlyMixesLinkWrapper>
                  </MixesItemWrapper>
                ))}
              </PlaylistWrapper>
            </SoundsGroup>
          </SoundsBody>
        </SoundsContainer>
      </Layout>
    </ContextProvider>
  )
}

export default Sounds
