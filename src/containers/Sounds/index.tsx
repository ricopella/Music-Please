import BackButton from '../../components/BackButton'
import ContextProvider from '../../provider/ContextProvider'
import Layout from '../../components/Layout'
import React from 'react'
import styled from '@emotion/styled'
import useSpotifyPlaylists from '../../hooks/useSpotifyPlaylists'

const ShopContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  margin-top: 5rem;
  display: grid;
  grid-template-rows: max-content 1fr;
`

const PAGE_TITLE = "SOUNDS"

const Sounds = () => {
  const [playlists, error] = useSpotifyPlaylists()
  console.log({ playlists, error })
  return (
    <ContextProvider>
      <Layout title={PAGE_TITLE}>
        <BackButton />
      </Layout>
    </ContextProvider>
  )
}

export default Sounds
