import Button from 'components/Button/Button'
import BestProduct from 'components/Product/BestProduct'
import cartVoid from '../../assets/icons/voidCart.svg'


const VoidCart = () => {
  return<>
    <img src={cartVoid} alt='Carrito vacio'/>
    <p>Ups... Su carrito esta vacio!</p>
    <Button icon={'cart'} text={'Comprar Ahora'}/>

    <p>Productos que te pueden interesar</p>
    <BestProduct/>
  </>
}

export default VoidCart