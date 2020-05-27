import Header from '../../components/Header'
import Layout from '../../components/Layout'
import React from 'react'
import SimpleSplash from '../../components/SimpleSplash'

const PAGE_TITLE = "404: Page Not found"

const NotFoundPage = () => (
  <Layout title={PAGE_TITLE}>
    <Header />
    <SimpleSplash title={"NOT FOUND"}>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </SimpleSplash>
  </Layout>
)

export default NotFoundPage
