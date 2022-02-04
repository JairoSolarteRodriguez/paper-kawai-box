// import Counter from 'components/Counter/Counter'
import { useState, useEffect } from 'react'
import productCartIcon from '../../assets/icons/productCartIcon.svg'
import Counter from 'components/Counter/Counter'

const Product = ( props ) => {
  let { id, name, shortDescription, image, amount, price } = props 
  const [cant, setCant] = useState(amount)

  useEffect(() => {
    // console.table(id,' | ' ,price * cant)
    const data = {
      id,
      name,
      price: price * cant,
    }
    console.log(data)

  }, [id, price, cant]);
  

  const addToCart = () => {
    console.log( props )
  }

  return<div style={{border: '1px solid gray', margin: '0.5rem'}}>
    <h2>{name}</h2>
    <p>{shortDescription}</p>
    <img src={image} alt={name} width='200px'/>
    <br/>
    <span>{price * cant}</span>
    <Counter amount={amount} setCant={setCant} cant={cant}/>

    <button onClick={addToCart}>
      <img src={productCartIcon} alt="carrito de producto" />
    </button>
  </div>
}

export default Product