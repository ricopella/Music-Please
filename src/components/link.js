import React from "react"
import styled from "@emotion/styled"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const ContactLink = styled(OutboundLink)`
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
