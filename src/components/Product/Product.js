import productCartIcon from '../../assets/icons/productCartIcon.svg'
import './product.css'


const Product = ( { data, addToCart} ) => {
  let { id, name, shortDescription, image, amount, price } = data

  return<div className='product'>
    <img src={image} alt={name} width='200px'/>
    <div className='info'>
      <div className='all-info'>
        <h3>{name}</h3>
        <p>{shortDescription}</p>
        <p>${new Intl.NumberFormat("es-CO").format(price * amount)} cop</p>
      </div>
      <button className='add-cart' onClick={() => addToCart(id)}>
        <img className='icon-cart' src={productCartIcon} alt="carrito de producto" />
      </button>
    </div>
  </div>
}

export default Product