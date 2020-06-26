import Component from "../../components/Contact"
import Layout from "../../components/Layout"
import React from "react"

const PAGE_TITLE = `CONTACT US`

const Contact = () => (
  <Layout title={PAGE_TITLE} hasCenteredLogo>
    <Component />
  </Layout>
)

export default Contact
