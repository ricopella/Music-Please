import React, { FC, useContext } from 'react'
import StoreContext from '../../context/StoreContext'
import styled from '../../styled'
import useShopifyProducts from '../../hooks/useShopifyProducts'

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

const ProductGrid: FC<{}> = () => {
  const products = useShopifyProducts()
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const getPrice = (price: string): string =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : "USD",
      minimumFractionDigits: 2,
      style: "currency",
    }).format(parseFloat(price ? price : "0"))

  return (
    <ShopProductsWrapper>
      {products.map(item => (
        <ProductWrapper key={`shop_item_${item.node.shopifyId}`}>
          <div>{item.node.title.toUpperCase()}</div>
          <div>{item.node.description.toUpperCase()}</div>
          <div>{`${getPrice(
            item.node.priceRange.maxVariantPrice.amount
          )}`}</div>
          <div>{item.node.availableForSale ? `IN STOCK` : `OUT OF STOCK`}</div>
        </ProductWrapper>
      ))}
    </ShopProductsWrapper>
  )
}

export default ProductGrid
