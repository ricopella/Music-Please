import React from "react"
import Styled from "../styles/twitch.styles.js"
import IframeResizer from "iframe-resizer-react"
import Image from "../components/image"
import ExternalLink from "../components/link"
import "../components/layout.css"
import useTwitchLiveStreams from "../hooks/useTwitchLiveStream"
import BackButton from "../components/returnbutton.js"
import LiveNow from "../components/livenow"
import SEO from "../components/seo"
import Footer from "../components/footer"

// ASSETS
import Venmo from "../images/svg/venmo-icon.svg"
import CashApp from "../images/svg/cash-app.svg"

const PAGE_META_DESCRIPTION = "MUSIC PLEASE BROADCAST NETWORK"
const PAGE_TITLE = "LIVE BROADCAST"

const Twitch = () => {
    // TODO: need to move /streams to a back end API
    // const [streams] = useTwitchLiveStreams()
    const streams = []

    return ( <
        >
        <
        SEO description = { PAGE_META_DESCRIPTION }
        title = { PAGE_TITLE }
        /> <
        Styled.TwitchContainer >
        <
        BackButton / >
        <
        Styled.TwitchPageContainer > {
            (streams || []).length ? ( <
                LiveNow / >
            ) : ( <
                Styled.LogoWrapper to = { "/" } >
                <
                Image filename = "no_BG_MUSICPLEASE.png"
                alt = "MUSIC PLEASE LOGO" / >
                <
                /Styled.LogoWrapper>
            )
        } <
        Styled.TwitchVideosWrapper >
        <
        IframeResizer log src = "https://player.twitch.tv/?channel=themusicplease&parent=https://themusicplease.com"
        style = {
            {
                border: "none",
                height: 1,
                minHeight: "100%",
                minWidth: "100%",
                width: 1,
            }
        }
        /> <
        /Styled.TwitchVideosWrapper> <
        Styled.ContactWrapper >
        <
        Styled.LinksWrapper >
        <
        ExternalLink href = "https://venmo.com/code?user_id=1944702211325952399" >
        <
        Venmo style = {
            { height: 24, width: 24 } }
        alt = "Venmo" / >
        <
        /ExternalLink> <
        ExternalLink href = "https://cash.app/$musicplease" >
        <
        CashApp alt = "CashApp"
        style = {
            { height: 32, width: 32, marginTop: -4 } }
        /> <
        /ExternalLink> <
        /Styled.LinksWrapper> <
        /Styled.ContactWrapper> <
        /Styled.TwitchPageContainer> <
        Footer / >
        <
        /Styled.TwitchContainer> <
        />
    )
}

export default Twitch