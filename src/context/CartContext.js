import React, { useState } from "react"

const CartContext = React.createContext({})

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  return <CartContext.Provider value={ {products, setProducts} }>
    {children}
  </CartContext.Provider>
}

export default CartContext