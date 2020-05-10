import React from "react"
import Styled from "../styles/twitch.styles.js"
import IframeResizer from "iframe-resizer-react"
import Image from "../components/image"
import Layout from "../components/layout"
import ExternalLink from "../components/link"
import "../components/layout.css"

// ASSETS
import Venmo from "../images/svg/venmo-icon.svg"
import CashApp from "../images/svg/cash-app.svg"
import Live from "../images/gif/live.gif"
import Bouncy from "../images/gif/BOUNCY.gif"

const Twitch = () => {
  return (
    <Styled.TwitchContainer>
      <Styled.TwitchPageContainer>
        <Styled.LiveNow src={Live} />
        <Styled.TwitchVideosWrapper>
          <IframeResizer
            log
            src="https://player.twitch.tv/?channel=themusicplease&parent=https://themusicplease.com"
            style={{
              width: 1,
              minWidth: "100%",
              height: 1,
              minHeight: "100%",
              border: "none",
            }}
          />
        </Styled.TwitchVideosWrapper>
        <Styled.ContactWrapper>
          <Styled.LinksWrapper>
            <ExternalLink href="https://venmo.com/Bryant-">
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
    </Styled.TwitchContainer>
  )
}

export default Twitch
