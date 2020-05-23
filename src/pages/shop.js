import React from "react"
import useShopifyProducts from "../hooks/useShopifyProducts"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const ShopContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2rem 2rem;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
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

const Shop = () => {
  const products = useShopifyProducts()

  return (
    <Layout>
      <SEO title="THE MUSIC PLEASE SHOP" />
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
        <Footer />
      </ShopContainer>
    </Layout>
  )
}

export default Shop
