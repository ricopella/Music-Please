import { graphql, useStaticQuery } from 'gatsby'
import { IUseShopifyProducts } from '../types'

const useShopifyProducts = (): IUseShopifyProducts[] => {
  const data = useStaticQuery(graphql`
    query ShopifyProducts {
      allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            handle
            createdAt
            variants {
              price
            }
            title
            shopifyId
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `)

  if (!data) {
    return []
  }

  return data.allShopifyProduct.edges
}

export default useShopifyProducts
