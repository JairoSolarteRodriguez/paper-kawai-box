import { TYPES } from "services/actions/CartActions"
import { allProducts } from "services/data"

export const cartInitialState = {
  products : allProducts,
  cart: []
}

export const cartReducer = (state, action) => {

  switch(action.type){
    case TYPES.add:{
      let newItem = state.products.find(product => product.id === action.payload)
      
      let itemInCart = state.cart.find(item => item.id === newItem.id)

      return itemInCart ? {
        ...state,
        cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item)
      } : {
        ...state, 
        cart: [...state.cart, {...newItem, quantity: 1}
      ]}
    }

    case TYPES.removeAll:{
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    }

    case TYPES.removeOne:{
      let itemToDelete = state.cart.find(item => item.id === action.payload)

      return itemToDelete.quantity > 1 ? {
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
      } : {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    }

    case TYPES.clearCart:{
      return cartInitialState

    }

    default:
      return state
  }
}