import Product from 'components/Product/Product'
import BestProduct from './BestProduct'
import { useReducer } from 'react'
import { TYPES } from 'services/actions/CartActions'
import { cartInitialState, cartReducer } from 'reducers/CartReducer'
import { useParams } from "react-router-dom"

localStorage.setItem('cart', [])

const ListOfProducts = () => {
  const { best } = useParams()


  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const { products, cart } = state

  if(cart.length >= 1){
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  
  const addToCart = (id) => {
    dispatch({type: TYPES.add, payload: id})
  }

  return<main>
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