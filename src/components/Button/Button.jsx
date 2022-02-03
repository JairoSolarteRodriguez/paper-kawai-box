import { Link } from "react-router-dom"
import cartIcon from '../../assets/icons/cartIcon.svg'
import trasIcon from '../../assets/icons/trasIcon.svg'
import whatsIcon from '../../assets/icons/whatsIcon.svg'


const Button = ( props ) => {
  const { icon, text } = props

  return(
    <Link to='/products'>
      <img src={icon === 'cart' ? cartIcon : icon === 'trash' ? trasIcon : icon === 'whats' ? whatsIcon : null} alt='icon'/>
      {text}
    </Link>
  )
}

export default Button