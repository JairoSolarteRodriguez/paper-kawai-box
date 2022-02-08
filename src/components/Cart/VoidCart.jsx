import cartVoid from '../../assets/icons/voidCart.svg'
import './cart.css'

const VoidCart = () => {

  return<section className='void-cart'>
    <img src={cartVoid} alt='Carrito vacio'/>
    <p>Uppssss... Su carrito esta vacio!</p>
  </section>
}

export default VoidCart