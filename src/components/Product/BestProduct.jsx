import Product from "./Product"

const BestProduct = ( props ) => {
  const { bestSeller, id, name, shortDescription, image, amount } = props
  let products = []
  
  console.log(bestSeller)
  return <>
    <h1>Hola</h1>
    {
      bestSeller === true ? (
        products.push({ id, name, shortDescription, image, amount })
        (products.map(( { id, name, shortDescription, image, amount } ) => (
          <Product key={id} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount}/>
        )))
      ) : null
      
    }
  </>
}

export default BestProduct