import productCartIcon from '../../assets/icons/productCartIcon.svg'

const Product = ( props ) => {
  const { id, name, shortDescription, image, amount } = props 
  
  const addToCart = () => {
    console.log(`Agregado producto numero: ${id}`)
  }

  return<>
    <h2>{name}</h2>
    <p>{shortDescription}</p>
    <img src={image} alt={name} width='200px'/>
    <br/>
    <span>{amount}</span>
    <button onClick={addToCart}>
      <img src={productCartIcon} alt="carrito de producto" />
    </button>
  </>
}

export default Product