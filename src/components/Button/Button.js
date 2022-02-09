import { Link } from "react-router-dom"
import cartIcon from '../../assets/icons/cartIcon.svg'
import trasIcon from '../../assets/icons/trasIcon.svg'
import whatsIcon from '../../assets/icons/whatsIcon.svg'
import './button.css'

const Button = ( props ) => {
  const { icon, text } = props

  return(
    <div className="containerButton">
      <Link to='/products' className="buttons">
        <img src={icon === 'cart' ? cartIcon : icon === 'trash' ? trasIcon : icon === 'whats' ? whatsIcon : null} alt='icon'/>
        {text}
      </Link>
    </div>
  )
}

export default Button