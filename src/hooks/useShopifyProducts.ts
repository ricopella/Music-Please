import { graphql, useStaticQuery } from "gatsby"

const useShopifyProducts = () => {
    const data = useStaticQuery(graphql `
    query ShopifyProducts {
      allShopifyProduct {
        edges {
          node {
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