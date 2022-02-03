import Product from 'components/Product/Product'
import {allProducts} from '../../services/data'
import { useParams } from "react-router-dom"


const ListOfProducts = () => {
  const { best } = useParams()

  return<>
    { 
      best ? <h2>Productos mas vendidos</h2> : <h2>Todos los productos</h2>
    }
    
    {
      allProducts.map(({ id, name, shortDescription, image, amount, bestSeller }) => {
        if(best){
          let products = []

          if(bestSeller !== true){                  
            products.push({ id, name, shortDescription, image, amount })

            products.map(( { id, name, shortDescription, image, amount } ) => (
              <Product key={id} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount}/>
            ))
          }else return null
        }
        
        return <Product key={id} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount}/>
    })
    }
  </>
}

export default ListOfProducts