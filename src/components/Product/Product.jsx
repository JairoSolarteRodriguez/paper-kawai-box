import productCartIcon from '../../assets/icons/productCartIcon.svg'
import './product.css'


const Product = ( { data, addToCart} ) => {
  let { id, name, shortDescription, image, amount, price } = data

  return<div className='product'>
    <img src={image} alt={name} width='200px'/>
    <div className='info'>
      <div>
        <h3>{name}</h3>
        <p>{shortDescription}</p>
        <p>${price * amount}</p>
      </div>
      <button onClick={() => addToCart(id)}>
        <img src={productCartIcon} alt="carrito de producto" />
      </button>
    </div>
  </div>
}

export default Product