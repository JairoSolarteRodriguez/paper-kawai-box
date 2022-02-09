import Product from "./Product"

const BestProduct = ( {data, addToCart} ) => {
  const { bestSeller, id, name, shortDescription, image, amount, price } = data
  
  let products = []
  products.push({ bestSeller, id, name, shortDescription, image, amount, price })


  return <>
    {
      bestSeller === true ? (
        (products.map((productData) => (
          <Product key={productData.id} addToCart={addToCart} data={productData}/>
        )))
      ) : null
      
    }
  </>
}

export default BestProduct