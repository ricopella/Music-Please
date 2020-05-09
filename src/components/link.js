import React from "react"
import styled from "@emotion/styled"

const ContactLink = styled.a`
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

const ExternalLink = ({ children, href = "" }) => (
  <ContactLink
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    title="href"
  >
    {children}
  </ContactLink>
)

export default ExternalLink
