import { Link } from "gatsby"
import React from "react"
import { PUBLIC_ID } from "../../config/cloudinaryIds"
import useCloudinaryImage from "../../hooks/useCloudinaryImage"
import styled from "../../styled"

const LogoWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: auto;
  width: 11.75rem;
  margin: 2rem auto;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.media.s}) {
    width: 10.75rem;
  }
`

const Img = styled.img`
  margin-bottom: 0;
`

const HeadingCentered = () => {
  const url = useCloudinaryImage(PUBLIC_ID.MP_GIF)
  return (
    <LogoWrapper to={"/"}>
      <Img src={url} alt="MUSIC PLEASE LOGO" />
    </LogoWrapper>
  )
}

export default HeadingCentered
