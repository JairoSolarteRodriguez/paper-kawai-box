import VoidCart from "components/Cart/VoidCart"
import MyCart from "components/Cart/MyCart"

const Cart = () =>{
  const productsInCart = []

  return(
    <>
      {
        productsInCart.length === 0 ? <VoidCart/> : <MyCart products={productsInCart}/>
      }
    </>
  )
}

export default Cart