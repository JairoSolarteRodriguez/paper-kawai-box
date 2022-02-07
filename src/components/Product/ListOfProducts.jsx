import Product from 'components/Product/Product'
import BestProduct from './BestProduct'
import { useReducer } from 'react'
import { TYPES } from 'services/actions/CartActions'
import { cartInitialState, cartReducer } from 'reducers/CartReducer'
import { useParams } from "react-router-dom"
import Cart from 'pages/cart/Cart'


const ListOfProducts = () => {
  const { best } = useParams()


  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const { products, cart } = state
  
  
  const addToCart = (id) => {
    dispatch({type: TYPES.add, payload: id})
  }

  const clearCart = () => {
    dispatch({type: TYPES.clearCart})
  }

  const delToCart = (id, all = false) => {
    if(all){
      dispatch({type: TYPES.removeAll, payload: id})
    }else{
      dispatch({type: TYPES.removeOne, payload: id})
    }
  }

  return<main>
    <Cart data={cart} clearCart={clearCart} delToCart={delToCart}/>

    { 
      best ? <h2>Productos mas vendidos</h2> : <h2>Todos los productos</h2>
    }
    <section>
      {
        products.map((productData) => {
          if(best){
            return <BestProduct key={productData.id} data={productData} addToCart={addToCart}/>
          }
          
          return <Product key={productData.id} addToCart={addToCart} data={productData}/>
        })
      }
    </section>
  </main>
}

export default ListOfProducts