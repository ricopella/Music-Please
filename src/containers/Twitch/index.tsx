import BackButton from '../../components/BackButton'
import CashApp from '../../images/svg/cash-app.svg'
import ExternalLink from '../../components/Link'
import IframeResizer from 'iframe-resizer-react'
import Image from '../../components/Image'
import Layout from '../../components/Layout'
import React from 'react'
import Styled from './twitch.styles'
import Venmo from '../../images/svg/venmo-icon.svg'

const PAGE_META_DESCRIPTION = "MUSIC PLEASE BROADCAST NETWORK"
const PAGE_TITLE = "LIVE BROADCAST"

const Twitch = () => {
  return (
    <React.Fragment>
      <BackButton />
      <Layout bouncy description={PAGE_META_DESCRIPTION} title={PAGE_TITLE}>
        <Styled.TwitchPageContainer>
          <Styled.LogoWrapper to={"/"}>
            <Image fileName="no_BG_MUSICPLEASE.png" alt="MUSIC PLEASE LOGO" />
          </Styled.LogoWrapper>
          <Styled.TwitchVideosWrapper>
            <IframeResizer
              log
              src="https://player.twitch.tv/?channel=themusicplease&parent=https://themusicplease.com"
              style={{
                border: "none",
                height: 1,
                minHeight: "100%",
                minWidth: "100%",
                width: 1,
              }}
            />
          </Styled.TwitchVideosWrapper>
          <Styled.ContactWrapper>
            <Styled.LinksWrapper>
              <ExternalLink href="https://venmo.com/code?user_id=1944702211325952399">
                <Venmo style={{ height: 24, width: 24 }} alt="Venmo" />
              </ExternalLink>
              <ExternalLink href="https://cash.app/$musicplease">
                <CashApp
                  alt="CashApp"
                  style={{ height: 32, width: 32, marginTop: -4 }}
                />
              </ExternalLink>
            </Styled.LinksWrapper>
          </Styled.ContactWrapper>
        </Styled.TwitchPageContainer>
      </Layout>
    </React.Fragment>
  )
}

export default Twitch
