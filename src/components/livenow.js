import React from "react"
import Live from "../images/gif/live.gif"
import styled from "@emotion/styled"

const LiveNowWrapper = styled.img`
  width: 6rem;
  height: auto;
  margin: 0 auto;
`

const LiveNow = () => <LiveNowWrapper src={Live} />

export default LiveNow
