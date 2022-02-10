import VoidCart from "../../components/Cart/VoidCart"
import MyCart from "../../components/Cart/MyCart"
import './cart.css'

const Cart = ({ data = [], clearCart, delToCart, showCart}) =>{
  
  // Get array whit total price
  let total = data.map(({quantity, price}) => (quantity * price))
  
  // Operation for the total price
  let finalTotal = total.reduce((a, b) => a + b, 0);

  // Define msg for whatsapp message.
  let msg = ``
  let msgTotal = `*TOTAL: $${new Intl.NumberFormat("es-CO").format(finalTotal)} cop* %0D%0A`
  let msgStart = `*Hola envío el pedido espero confirmación:* %0D%0A ${msg}`
  data.map(({name, quantity, price}) => msg += `${name} ${price}X(${quantity})=${price * quantity} %0D%0A`)
  let msgFinal = `${msgStart}${msg} ${msgTotal}`

  return(
    <div className={showCart ? 'show-cart' : 'hidde-cart'}>
      {
        data.length === 0 ?
         <VoidCart/> :
        <>
          <div className="products-in-cart">
            <MyCart data={data} delToCart={delToCart} total={total}/>
          </div>
          <aside>
           <button className='remove-all' onClick={clearCart}>Eliminar TODOS los productos del carrito</button>
            <a className='validate-order' href={`https://api.whatsapp.com/send/?phone=573105629989&text=${msgFinal}`} target='_blank' rel="noreferrer">Validar Compra por el valor de ${new Intl.NumberFormat("es-CO").format(finalTotal)}</a>
          </aside>
        </>
      }
    </div>
  )
}

export default Cart