import BackButton from '../../components/BackButton'
import Component from '../../components/Contact'
import Layout from '../../components/Layout'
import React from 'react'

const PAGE_TITLE = `CONTACT US`

const Contact = () => (
  <React.Fragment>
    <Layout title={PAGE_TITLE}>
      <BackButton />
      <Component />
    </Layout>
  </React.Fragment>
)

export default Contact
