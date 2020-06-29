import { Link } from 'gatsby';
import React from 'react';
import MP_GIF from '../../images/gif/MP_3dnarv3.gif';
import styled from '../../styled';

const LogoWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: auto;
  width: 11.75rem;
  margin: 0 auto;

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

const HeadingCentered = () => (
  <LogoWrapper to={"/"}>
    <Img src={MP_GIF} alt="MUSIC PLEASE LOGO" />
  </LogoWrapper>
)

export default HeadingCentered
