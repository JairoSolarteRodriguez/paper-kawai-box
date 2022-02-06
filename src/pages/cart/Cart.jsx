import VoidCart from "components/Cart/VoidCart"
import MyCart from "components/Cart/MyCart"
import './cart.css'

const Cart = () =>{
  let data = localStorage.getItem('cart')
  const products = JSON.parse(data)

  return(
    <div className='cart-menu'>
      {
        data.length === 0 ?
         <VoidCart/> :
        <>
           <MyCart data={products}/>
           <button className='remove-all'>Eliminar TODOS los productos del carrito</button> 
        </>
      }
    </div>
  )
}

export default Cart