import React from "react"
import styled from "@emotion/styled"
import getYear from "date-fns/getYear"
import { COLORS, MEDIA_BREAKPOINTS } from "../styles/constants"

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 1fr;
  justify-content: center;
  width: 100vw;
  margin: 1rem 0;

  @media (max-width: ${MEDIA_BREAKPOINTS.TABLET}) {
    margin-bottom: 2.5rem;
  }
`

const FooterContent = styled.div`
  color: ${COLORS.NEON_GREEN};
  font-size: 0.75rem;
`

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      &copy;{`${getYear(new Date())} MUSIC PLEASE TECHNOLOGICAL`}
    </FooterContent>
  </FooterContainer>
)

export default Footer
