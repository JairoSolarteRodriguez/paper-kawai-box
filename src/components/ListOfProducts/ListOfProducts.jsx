import Product from 'components/Product/Product'
import {allProducts} from '../../services/data'

const ListOfProducts = () => {

  return<>
    <h2>Todos los productos</h2>
    {
      allProducts.map(({ id, name, shortDescription, image, amount }) => <Product key={id} name={name} shortDescription={shortDescription} image={image} amount={amount}/>)
    }
  </>
}

export default ListOfProducts