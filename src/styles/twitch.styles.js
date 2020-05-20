import styled from '@emotion/styled';
import { MEDIA_BREAKPOINTS } from '../styles/constants';
import Bouncy from '../images/gif/BOUNCY.gif'
import { Link } from "gatsby"

const TwitchContainer = styled.div `
  display: grid;
  background-color: black;
  background-image: url(${Bouncy}); 
  background-size: cover;
  height: 100vh;
  height: ${props => props.vh}px;
  max-height: 100vh;
  max-height: ${props => props.vh}px;
  max-width: 100vw;
  opacity: .75;
  width: 100%;
  grid-template-rows: 1fr max-content;
`

const TwitchPageContainer = styled.section `
  display: grid;
  grid-row-gap: .5rem;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  justify-items: center;
  max-height: ${props => props.vh}px;
  max-width: 100vw;
  width: 100%;

  @media (max-width: ${MEDIA_BREAKPOINTS.PHONE}) {
    grid-template-rows: max-content 25rem max-content;
  }
`

const LogoWrapper = styled(Link)
`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 7rem;
  width: 11.75rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${MEDIA_BREAKPOINTS.PHONE}) {
    height: 8rem;
    width: 12.75rem;
  }
`

const TwitchVideosWrapper = styled.div `
  align-content: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  max-height: 100%;
  max-width: calc(100% - 12rem);
  width: 100%;

  @media (max-width: ${MEDIA_BREAKPOINTS.TABLET}) {
    max-width: calc(100% - 2rem);
  }

  @media (max-width: ${MEDIA_BREAKPOINTS.PHONE}) {
    max-width: calc(100% - 2rem);
    max-height: 26rem;
  }
`

const ContactWrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: .5rem;
`

const LinksWrapper = styled.div `
  display: grid;
  height: 3.125rem;
  grid-template-columns: max-content max-content;
  grid-template-rows: 1fr;
  justify-content: center;
  grid-column-gap: 1rem;
`

const ContactHeading = styled.h4 `
  margin: 0 0;
`

export default {
    ContactHeading,
    ContactWrapper,
    LinksWrapper,
    LogoWrapper,
    TwitchContainer,
    TwitchPageContainer,
    TwitchVideosWrapper,
}