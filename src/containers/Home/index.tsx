import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import LiveNow from "../../components/LiveNow"
import Ticker from "../../components/Ticker"
import { PUBLIC_ID } from "../../config/cloudinaryIds"
import useCloudinaryImage from "../../hooks/useCloudinaryImage"
import useTwitchLiveStreams from "../../hooks/useTwitchLiveStream"
import styled from "../../styled"
import ROUTES from "../../config/routes"

const HomeWrapper = styled.div`
  position: absolute;
  display: grid;
  top: 50%;
  transform: translateY(-50%);
  align-self: center;
  width: 100%;
`

const LogoContainer = styled(Link)`
  display: grid;
  align-self: center;
  height: auto;
  justify-self: center;
  width: 25rem;

  @media only screen and (max-width: ${props => props.theme.media.l}) {
    width: 18rem;
  }

  @media only screen and (max-width: ${props => props.theme.media.m}) {
    width: 65%;
  }
`

const Logo = styled.img`
  margin: 0 auto;
`

const LiveNowWrapper = styled(Link)`
  margin: 0 auto;
`

const PAGE_TITLE = "MUSIC PLEASE"

const PAGE_DESCRIPTION = `CREATIVE CURATION | TECHNOLOGICAL DESIGN | DIGITAL DIRECTION`

const Home = () => {
  const [streams, error] = useTwitchLiveStreams()
  const url = useCloudinaryImage(PUBLIC_ID.MP_GIF)
  return (
    <Layout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <Ticker />
      <HomeWrapper>
        {(streams || []).length >= 1 ? (
          <LiveNowWrapper to={ROUTES.live}>
            <LiveNow />
          </LiveNowWrapper>
        ) : null}
        <LogoContainer to={ROUTES.sounds}>
          <Logo src={url} />
        </LogoContainer>
      </HomeWrapper>
    </Layout>
  )
}

export default Home
