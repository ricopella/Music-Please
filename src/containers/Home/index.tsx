import Image from '../../components/Image'
import Layout from '../../components/Layout'
import React from 'react'
import Socials from '../../components/Socials'
import styled from '@emotion/styled'
import Ticker from '../../components/Ticker'
import { MEDIA_BREAKPOINTS } from '../../styles/constants'

const HomeWrapper = styled.div`
  position: absolute;
  display: grid;
  top: 50%;
  transform: translateY(-50%);
  align-self: center;
  width: 100%;
`

const LogoContainer = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  width: 43.75rem;

  @media only screen and (max-width: ${MEDIA_BREAKPOINTS.TABLET}) {
    width: 80%;
  }
`

const PAGE_TITLE = "THE MUSIC PLEASE ONLINE"

const Home = () => {
  return (
    <Layout title={PAGE_TITLE} bouncy>
      <Ticker />
      <HomeWrapper>
        <LogoContainer>
          <Image
            alt="Music Please Main Logo"
            fileName="no_BG_MUSICPLEASE.png"
          />
        </LogoContainer>
        <Socials />
      </HomeWrapper>
    </Layout>
  )
}

export default Home
