import Product from "./Product"

const BestProduct = ( props ) => {
  const { bestSeller, id, name, shortDescription, image, amount, price } = props
  let products = []
  
  products.push({ bestSeller, id, name, shortDescription, image, amount, price })


  return <>
    {
      bestSeller === true ? (
        (products.map(( { id, name, shortDescription, image, amount, price } ) => (
          <Product key={id} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount} price={price}/>
        )))
      ) : null
      
    }
  </>
}

export default BestProduct