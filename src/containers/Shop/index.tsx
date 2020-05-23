import BackButton from '../../components/BackButton'
import Layout from '../../components/Layout'
import React from 'react'
import styled from '@emotion/styled'
import useShopifyProducts from '../../hooks/useShopifyProducts'

const ShopContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  display: grid;
  grid-template-rows: max-content 1fr;
`

const ShopProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, max-content);
`

const PAGE_TITLE = "THE MUSIC PLEASE SHOP"

const Shop = () => {
  const products = useShopifyProducts()

  return (
    <React.Fragment>
      <BackButton />
      <Layout title={PAGE_TITLE}>
        <ShopContainer>
          <h1>THE MUSIC PLEASE SHOP</h1>
          <ShopProductsWrapper>
            {products.map(item => (
              <ProductWrapper key={`shop_item_${item.node.shopifyId}`}>
                <div>{item.node.title.toUpperCase()}</div>
                <div>{item.node.description.toUpperCase()}</div>
                <div>{`$${item.node.priceRange.maxVariantPrice.amount}`}</div>
                <div>
                  {item.node.availableForSale ? `IN STOCK` : `OUT OF STOCK`}
                </div>
              </ProductWrapper>
            ))}
          </ShopProductsWrapper>
        </ShopContainer>
      </Layout>
    </React.Fragment>
  )
}

export default Shop
