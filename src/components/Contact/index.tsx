import React from 'react'
import styled from '@emotion/styled'
import useSiteMetaData from '../../hooks/useSiteMetaData'
import { COLORS } from '../../styles/constants'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ContactContainer = styled.div`
  padding: 0 2rem 0 2rem;
  max-width: 31.25rem;
  margin: 0 auto;
  height: 100%;
  display: grid;
  align-content: center;
`

const ContactHeading = styled.h1`
  text-align: center;
`

const Input = styled.input`
  background-color: transparent;
  color: ${COLORS.NEON_GREEN};
  width: 100%;
`

const TextArea = styled.textarea`
  background-color: transparent;
  color: ${COLORS.NEON_GREEN};
  width: 100%;
`

const EmailLink = styled(OutboundLink)`
  color: ${COLORS.NEON_GREEN};
`

const FormActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
`

const Button = styled.button`
  width: 6.25rem;

  &:hover {
    cursor: pointer;
  }
`

const Contact = () => {
  const { siteUrl } = useSiteMetaData()
  return (
    <ContactContainer>
      <ContactHeading>CONTACT US</ContactHeading>
      <form
        action={`${siteUrl}/contact-success`}
        data-netlify="true"
        method="POST"
        name="contact"
      >
        <p>
          <label>*NAME:</label>
          <Input type="text" name="name" required />
        </p>
        <p>
          <label>*E-MAIL:</label>
          <Input type="email" name="email" required />
        </p>
        <p>
          <label>PHONE NUMBER:</label>
          <Input type="tel" name="tel" />
        </p>
        <p>
          <label htmlFor="message">MESSAGE:</label>
          <TextArea name="message" id="message" />
        </p>
        <FormActionContainer>
          {" "}
          <Button type="submit">SEND</Button>
          <div>
            Or{" "}
            <EmailLink
              href={`mailto:musicpleaseradio@gmail.com`}
              target="_blank"
              rel="noopener noreferrer"
              title="musicpleaseradio@gmail.com"
            >
              email
            </EmailLink>{" "}
            us directly
          </div>
        </FormActionContainer>
      </form>
    </ContactContainer>
  )
}

export default Contact
