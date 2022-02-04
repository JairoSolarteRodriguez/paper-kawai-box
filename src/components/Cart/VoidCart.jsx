import Button from 'components/Button/Button'
import BestProduct from 'components/Product/BestProduct'
import cartVoid from '../../assets/icons/voidCart.svg'
import {allProducts} from '../../services/data'

const VoidCart = () => {
  
  return<>
    <img src={cartVoid} alt='Carrito vacio'/>
    <p>Ups... Su carrito esta vacio!</p>
    <Button icon={'cart'} text={'Comprar Ahora'}/>

    <p>Productos que te pueden interesar</p>
    {
      allProducts.map(({ bestSeller, id, name, shortDescription, image, amount, price })=>{
        return <BestProduct key={id} bestSeller={bestSeller} id={id} name={name} shortDescription={shortDescription} image={image} amount={amount} price={price}/>
      })
    }
  </>
}

export default VoidCart