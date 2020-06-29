import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import LiveNow from '../../components/LiveNow';
import Ticker from '../../components/Ticker';
import useTwitchLiveStreams from '../../hooks/useTwitchLiveStream';
import MP_Logo from '../../images/gif/MP_3dnarv3.gif';
import styled from '../../styled';

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
  height: 35.75rem;
  justify-self: center;
  width: 43.75rem;

  @media only screen and (max-width: ${props => props.theme.media.l}) {
    height: 22.75rem;
    width: 30rem;
  }

  @media only screen and (max-width: ${props => props.theme.media.m}) {
    width: 80%;
  }
`

const Logo = styled.img`
  margin: 0 auto;
`

const LiveNowWrapper = styled(Link)`
  margin: 0 auto;
`

const PAGE_TITLE = "THE MUSIC PLEASE ONLINE"

const Home = () => {
  const [streams, error] = useTwitchLiveStreams()
  return (
    <Layout title={PAGE_TITLE}>
      <Ticker />
      <HomeWrapper>
        {(streams || []).length >= 1 ? (
          <LiveNowWrapper to="/live">
            <LiveNow />
          </LiveNowWrapper>
        ) : null}
        <LogoContainer>
          <Logo src={MP_Logo} />
        </LogoContainer>
      </HomeWrapper>
    </Layout>
  )
}

export default Home
