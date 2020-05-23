import BackButton from '../../components/BackButton'
import Layout from '../../components/Layout'
import React from 'react'
import SimpleSplash from '../../components/SimpleSplash'
import styled from '@emotion/styled'

const ContactP = styled.p`
  text-align: center;
`

const ContactSuccess = () => {
  return (
    <Layout title={`CONTACT US - SUCCESS`}>
      <BackButton />
      <SimpleSplash title={"CONTACT US"}>
        <ContactP>Thank you! We'll be in touch.</ContactP>
      </SimpleSplash>
    </Layout>
  )
}

export default ContactSuccess
