import { createContext, useReducer } from "react"
import { cartInitialState, cartReducer } from "reducers/CartReducer"

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [products, dispatch] = useReducer(cartReducer, cartInitialState)

  return(
    <CartContext.Provider value={[products, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
export default CartProvider