import React from 'react'

type ContextProps = {
  store: any
  addVariantToCart: any
  removeLineItem: any
  updateLineItem: any
}

const StoreContext = React.createContext<Partial<ContextProps>>({})

export default StoreContext
