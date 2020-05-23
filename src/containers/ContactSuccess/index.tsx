import Layout from '../../components/Layout'
import React from 'react'
import SimpleSplash from '../../components/SimpleSplash'
import styled from '@emotion/styled'

const ContactContainer = styled.div`
  display: grid;
  align-content: center;
  grid-template-rows: 1fr max-content;
  height: 100%;
  max-width: 31.25rem;
  padding: 0 2rem 0 2rem;
  margin: 0 auto;
`

const ContactWrapper = styled.div`
  display: grid;
  align-content: center;
`

const ContactHeading = styled.h1`
  text-align: center;
`

const ContactP = styled.p`
  text-align: center;
`

const ContactSuccess = () => {
  return (
    <Layout title={`CONTACT US - SUCCESS`}>
      <SimpleSplash title={"CONTACT US"}>
        <ContactP>Thank you! We'll be in touch.</ContactP>
      </SimpleSplash>
    </Layout>
  )
}

export default ContactSuccess
