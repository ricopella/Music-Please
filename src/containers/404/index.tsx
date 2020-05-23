import BackButton from '../../components/BackButton'
import Layout from '../../components/Layout'
import React from 'react'
import SimpleSplash from '../../components/SimpleSplash'

const PAGE_TITLE = "404: Page Not found"

const NotFoundPage = () => (
  <React.Fragment>
    <BackButton />
    <Layout title={PAGE_TITLE}>
      <SimpleSplash title={"NOT FOUND"}>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </SimpleSplash>
    </Layout>
  </React.Fragment>
)

export default NotFoundPage
