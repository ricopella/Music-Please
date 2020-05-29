import Component from '../../components/Contact'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import React from 'react'

const PAGE_TITLE = `CONTACT US`

const Contact = () => (
  <Layout title={PAGE_TITLE}>
    <Header />
    <Component />
  </Layout>
)

export default Contact
