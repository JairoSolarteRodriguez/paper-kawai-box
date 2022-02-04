import Product from 'components/Product/Product'
import {allProducts} from '../../services/data'
import { useParams } from "react-router-dom"
import BestProduct from './BestProduct'


const ListOfProducts = () => {
  const { best } = useParams()

  return<>
    { 
      best ? <h2>Productos mas vendidos</h2> : <h2>Todos los productos</h2>
    }
    
    {
      allProducts.map(({ id, name, shortDescription, image, amount, bestSeller, price }) => {
        if(best){
          return <BestProduct key={id} bestSeller={bestSeller} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount}/>
        }

          return <Product key={id} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount} price={price}/>
      })
    }
  </>
}

export default ListOfProducts