import CashApp from "../../images/svg/cash-app.svg"
import ExternalLink from "../../components/Link"
import HeadingCentered from "../../components/Logo/HeadingCentered"
import IframeResizer from "iframe-resizer-react"
import Layout from "../../components/Layout"
import LiveNow from "../../components/LiveNow"
import React from "react"
import Styled from "./twitch.styles"
import useTwitchLiveStreams from "../../hooks/useTwitchLiveStream"
import Venmo from "../../images/svg/venmo-icon.svg"
import { SLIDE_IN_ANIMATION_OPTIONS } from "../../styles/constants"
import Image from "../../components/Image"

const PAGE_TITLE = "MUSIC PLEASE | LIVE"

const Twitch = () => {
  const [streams, error] = useTwitchLiveStreams()
  const isLive = (streams || []).length >= 1
  return (
    <Layout title={PAGE_TITLE}>
      <Styled.TwitchPageContainer {...SLIDE_IN_ANIMATION_OPTIONS}>
        {isLive ? (
          <Styled.LiveNowWrapper>
            <LiveNow />
          </Styled.LiveNowWrapper>
        ) : (
          <HeadingCentered />
        )}
        <Styled.TwitchVideosWrapper>
          <IframeResizer
            log
            src={`https://player.twitch.tv/?channel=themusicplease&parent=themusicplease.com`}
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
  )
}

export default Twitch

// {isLive ? (
//   <IframeResizer
//     log
//     src="https://player.twitch.tv/?channel=themusicplease&parent=themusicplease.com"
//     style={{
//       border: "none",
//       height: 1,
//       minHeight: "100%",
//       minWidth: "100%",
//       width: 1,
//     }}
//   />
// ) : (
//   <ExternalLink href="https://www.twitch.tv/themusicplease">
//     <Image fileName="offline.jpg" alt="WE'RE CURRENTLY OFFLINE" />
//   </ExternalLink>
// )}
