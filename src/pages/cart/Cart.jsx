import VoidCart from "components/Cart/VoidCart"
import MyCart from "components/Cart/MyCart"
import './cart.css'
import { Link } from "react-router-dom"

const Cart = ({ data = [], clearCart, delToCart}) =>{
  
  // Get array whit total price
  let total = data.map(({quantity, price}) => (quantity * price))
  
  // Operation for the total price
  let finalTotal = total.reduce((a, b) => a + b, 0);

  // Define msg for whatsapp message.
  let msg = ``
  let msgTotal = `*TOTAL: $${finalTotal} pesos* %0D%0A`
  let msgStart = `Buenos dias envio el pedido:  %0D%0A ${msg}`
  data.map(({name, quantity, price}) => msg += `${name} ${price}X(${quantity})=${price * quantity} %0D%0A`)
  let msgFinal = `${msgStart} ${msg} ${msgTotal}`


  return(
    <div className='cart-menu'>
      {
        data.length === 0 ?
         <VoidCart/> :
        <>
          <Link to='/cart/elements' element={<MyCart data={data} delToCart={delToCart} total={total}/>}>Ir al carrito</Link>
           {/* <MyCart data={data} delToCart={delToCart} total={total}/> */}
           <button className='remove-all' onClick={clearCart}>Eliminar TODOS los productos del carrito</button>
            <a className='validate-order' href={`https://api.whatsapp.com/send/?phone=573106954672&text=${msgFinal}`} target='_blank'>Validar Compra</a>
        </>
      }
    </div>
  )
}

export default Cart