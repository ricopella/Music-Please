import React from "react"
import Styled from "../styles/twitch.styles.js"
import IframeResizer from "iframe-resizer-react"
import Image from "../components/image"
import Layout from "../components/layout"

import Venmo from "../images/svg/venmo-icon.svg"
import CashApp from "../images/svg/cash-app.svg"

const Twitch = () => {
  return (
    <Layout>
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
          <Styled.ContactWrapper>
            <Styled.ContactHeading>Show some support</Styled.ContactHeading>
            <Styled.LinksWrapper>
              <Styled.ContactLink
                href="https://venmo.com/Bryant-"
                target="_blank"
                rel="noopener"
              >
                <Venmo style={{ height: 24, width: 24 }} alt="Venmo" />
              </Styled.ContactLink>
              <Styled.ContactLink
                href="https://cash.app/$musicplease"
                target="_blank"
                rel="noopener"
              >
                <CashApp
                  alt="CashApp"
                  style={{ height: 32, width: 32, marginTop: -4 }}
                />
              </Styled.ContactLink>
            </Styled.LinksWrapper>
          </Styled.ContactWrapper>
        </Styled.TwitchPageContainer>
      </Styled.TwitchContainer>
    </Layout>
  )
}

export default Twitch
