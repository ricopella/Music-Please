import styled from "@emotion/styled"
import { MEDIA_BREAKPOINTS } from "../../styles/constants"
import { motion } from "framer-motion"

const TwitchPageContainer = styled(motion.section)`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  justify-items: center;
  max-width: 100vw;
  width: 100%;

  @media (max-width: ${MEDIA_BREAKPOINTS.PHONE}) {
    grid-template-rows: max-content 25rem max-content;
  }
`

const LiveNowWrapper = styled.div`
  margin: 1rem 0;
`

const TwitchVideosWrapper = styled.div`
  align-content: center;
  grid-template-columns: 1fr;
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

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 0.5rem;
`

const LinksWrapper = styled.div`
  display: grid;
  height: 3.125rem;
  grid-template-columns: max-content max-content;
  grid-template-rows: 1fr;
  justify-content: center;
  grid-column-gap: 1rem;
`

const ContactHeading = styled.h4`
  margin: 0 0;
`

export default {
  ContactHeading,
  ContactWrapper,
  LinksWrapper,
  TwitchPageContainer,
  TwitchVideosWrapper,
  LiveNowWrapper,
}
