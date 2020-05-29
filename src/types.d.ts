export interface IUseShopifyProducts {
  node: ShopifyProductItem
}

export interface ShopifyProductItem {
  availableForSale: boolean
  createdAt: string
  description: string
  handle: string
  id: string
  priceRange: {
    maxVariantPrice: {
      amount: string
    }
    minVariantPrice: {
      amount: string
    }
  }
  shopifyId: string
  title: string
  variants: ProductVariant[]
}

export interface ProductVariant {
  price: string
}

export interface IHeaderMenuItem {
  path: string
  title: string
}
