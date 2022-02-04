import Button from "components/Button/Button"

const MyCart = ( props ) =>{
  let { products } = props
  return <>
      <h2>Mi carrito de compras elementos: {products.length}</h2>
      <Button icon={'trash'} text={'Eliminar TODOS los productos del carrito'}/> <br/> 
      <Button icon={'cart'} text={'Ir a comprar mas productos'}/>
  </>
}

export default MyCart