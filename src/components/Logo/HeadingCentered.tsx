import { Link } from "gatsby"
import React from "react"
import styled from "../../styled"
import MusicPleaseRotator from "../../components/MusicPleaseRotator"

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

const HeadingCentered = () => {
  return (
    <LogoWrapper to={"/"}>
      <MusicPleaseRotator />
    </LogoWrapper>
  )
}

export default HeadingCentered
