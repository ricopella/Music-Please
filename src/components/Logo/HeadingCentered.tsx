import Image from '../../components/Image'
import React from 'react'
import styled from '../../styled'
import { Link } from 'gatsby'

const LogoWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 7rem;
  width: 11.75rem;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.media.s}) {
    height: 8rem;
    width: 12.75rem;
  }
`

const HeadingCentered = () => (
  <LogoWrapper to={"/"}>
    <Image fileName="no_BG_MUSICPLEASE.png" alt="MUSIC PLEASE LOGO" />
  </LogoWrapper>
)

export default HeadingCentered
