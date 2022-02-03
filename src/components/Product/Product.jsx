const Product = ( props ) => {
  
  const { name, shortDescription, image, amount } = props 
  
  return<>
    <h2>{name}</h2>
    <p>{shortDescription}</p>
    <img src={image} alt={name} width='200px'/>
    <br/>
    <span>{amount}</span>
  </>
}

export default Product