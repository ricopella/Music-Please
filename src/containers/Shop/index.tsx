import BackButton from '../../components/BackButton'
import ContextProvider from '../../provider/ContextProvider'
import Layout from '../../components/Layout'
import ProductGrid from '../../components/ProductGrid'
import React from 'react'
import styled from '@emotion/styled'

const ShopContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  margin-top: 5rem;
  display: grid;
  grid-template-rows: max-content 1fr;
`

const PAGE_TITLE = "THE MUSIC PLEASE SHOP"

const Shop = () => {
  return (
    <ContextProvider>
      <Layout title={PAGE_TITLE}>
        <BackButton />
        <ShopContainer>
          <h1>THE MUSIC PLEASE SHOP</h1>
          <ProductGrid />
        </ShopContainer>
      </Layout>
    </ContextProvider>
  )
}

export default Shop
