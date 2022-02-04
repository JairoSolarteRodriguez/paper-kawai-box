import Product from "./Product"

const BestProduct = ( props ) => {
  const { bestSeller, id, name, shortDescription, image, amount } = props
  let products = []
  
  // if(bestSeller === true){
  //   products.push({ bestSeller, id, name, shortDescription, image, amount })
  // } else return null
  products.push({ bestSeller, id, name, shortDescription, image, amount })


  return <>
    {
      bestSeller === true ? (
        (products.map(( { id, name, shortDescription, image, amount } ) => (
          <Product key={id} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount}/>
        )))
      ) : null
      
    }
  </>
}

export default BestProduct