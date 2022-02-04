import VoidCart from "components/Cart/VoidCart"
import MyCart from "components/Cart/MyCart"
import { useContext } from "react"
import CartContext from "context/CartContext"

const Cart = () =>{
  const { products } = useContext(CartContext)
  console.log(products)

  return(
    <>
      {
        products.length === 0 ? <VoidCart/> : <MyCart products={products}/>
      }
    </>
  )
}

export default Cart