import Product from './Product'
import { useReducer, useState } from 'react'
import { TYPES } from '../../services/actions/CartActions'
import { cartInitialState, cartReducer } from '../../reducers/CartReducer'
import { useParams } from "react-router-dom"
import Cart from '../../pages/cart/Cart'
import cartButton from '../../assets/icons/cartButton.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'
import './product.css'

const ListOfProducts = () => {
  const { best, catSearch } = useParams()

  // State for the cart whit useReducer
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)
  const { products, cart } = state

  // State for show cart
  const [show, setShow] = useState(false)
  
  // Show products in cart
  const setShowCart = () => {
    setShow(!show)
  }

  // Methods for cart functionalities
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

  // quantities for each product
  let allQuantity = cart.map(({quantity}) => quantity)
  allQuantity = allQuantity.reduce((a, b) => a + b, 0)
  
  // State for search
  const [search, setSearch] = useState('')

  // Set search
  const onSubmitSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }
  // Prevent default action
  const onHandleSubmit = (event) => {
    event.preventDefault()
  }

  // Filter products, categories and best seller.
  let result = []
  if(catSearch){
    result = products.filter(product => product.category === catSearch)
  }else if(best){
    result = products.filter(product => product.bestSeller === true)
  }else if(search !== ''){
    result = products.filter(product =>  product.name.toLowerCase().includes(search))
  }else{
    result = products
  }

  return<main>
    <form onChange={onSubmitSearch} onSubmit={onHandleSubmit}>
      <button className='search-button'><img src={searchIcon} alt='search icon'/></button>
      <input type='search' placeholder='Ingrese su busqueda' className='search'/>
    </form>

    <button onClick={setShowCart} className='cart-button'>
      <span className='show-quantity'>{allQuantity > 9 ? '+9' : allQuantity}</span>
      <img src={cartButton} alt="" />
    </button>

    <Cart data={cart} clearCart={clearCart} delToCart={delToCart} showCart={show}/>

    {
      catSearch ? <h2>{catSearch}</h2> :
      search ? <h2>Busqueda para "{search}"</h2> :
      best ? <h2>Productos mas vendidos</h2> : <h2>Todos los productos</h2>
    }

    <section>
      {
        result.length === 0 ? <h2>No hay productos disponibles</h2>:
        result.map((productData) => {
          return <Product key={productData.id} addToCart={addToCart} data={productData}/>
        })
      }
    </section>
  </main>
}

export default ListOfProducts