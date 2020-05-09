import React from "react"
import useTwitchVideos from "../hooks/useTwitchVideos"
import Styled from "../styles/twitch.styles.js"
import IframeResizer from "iframe-resizer-react"
import Image from "../components/image"
import Venmo from "../assets/venmo-icon.svg"
import CashApp from "../assets/cash-app.svg"

const Twitch = () => {
  return (
    <Styled.TwitchContainer>
      <Styled.TwitchPageContainer>
        <Styled.LogoWrapper>
          <Image filename="PLEASE.png" alt="Music Please Main Logo" />
        </Styled.LogoWrapper>
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
        <Styled.LinksWrapper>
          <img src={Venmo} alt="Venmo" style={{ height: 24, width: 24 }} />
          <img src={CashApp} alt="CashApp" style={{ height: 24, width: 24 }} />
        </Styled.LinksWrapper>
      </Styled.TwitchPageContainer>
    </Styled.TwitchContainer>
  )
}

export default Twitch
