import styled from '@emotion/styled';

import { mediaBreakpoints } from '../constants/breakpoints';

const TwitchContainer = styled.div `
display: grid;
height: 100vh;
width: 100vw;
max-height: 100vh;
max-width: 100vw;
`

const TwitchPageContainer = styled.section `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  grid-row-gap: 2rem;
  justify-items: center;
`

const LogoWrapper = styled.div `
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 12.5rem;
  width: 18.75rem;

  @media (max-width: ${mediaBreakpoints.phone}) {
    height: 8.5rem;
    width: 14.75rem;
  }
`

const TwitchVideosWrapper = styled.div `
  align-content: center;
  display: grid;
  grid-row: 2;
  grid-template-columns: 1fr;
  justify-items: center;
  max-height: 100%;
  max-width: calc(100% - 12rem);
  width: 100%;

  @media (max-width: ${mediaBreakpoints.tablet}) {
    max-width: calc(100% - 2rem);
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
  grid-row: 3;
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