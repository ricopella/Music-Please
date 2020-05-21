import React from "react"
import styled from "@emotion/styled"
import { COLORS } from "../styles/constants"

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

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeading>CONTACT US</ContactHeading>
      <form name="contact" method="POST" data-netlify="true">
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
        <p>
          <button type="submit">SEND</button>
        </p>
      </form>
    </ContactContainer>
  )
}

export default Contact
