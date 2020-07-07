import React from "react"
import { PUBLIC_ID } from "../../config/cloudinaryIds"
import useCloudinaryImage from "../../hooks/useCloudinaryImage"
import styled from "../../styled"
import Image from "../../components/Image"
import useBreakpoint from "../../hooks/useBreakpoint"

const Logo = styled.img`
  margin: 0 auto;
`
const MusicPleaseRotator = () => {
  const breakpoint = useBreakpoint()
  const url = useCloudinaryImage(PUBLIC_ID.MP_GIF)

  if (breakpoint === "S") {
    return <Image fileName="musicplease_noBG.png" alt="Music Please Logo" />
  }

  return <Logo src={url} />
}

export default MusicPleaseRotator
