import React from "react"
import styled from "@emotion/styled"
import getYear from "date-fns/getYear"
import { COLORS } from "../styles/constants"

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 1fr;
  justify-content: center;
  width: 100vw;
  margin: 1rem 0;
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
