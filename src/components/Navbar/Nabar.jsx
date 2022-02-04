import { Link } from 'react-router-dom'
import mainLogo from 'assets/icons/mainLogo.svg'
import menuIcon from 'assets/icons/menuIcon.svg'
import cartMenu from 'assets/icons/cartMenu.svg'
import './navbar.css'
const Navbar = () => {
  return<>
  <header>
    <nav className='navbar'>
      <button className='buttonMenuMobile'>
        <img src={menuIcon} alt="icono menu" />
      </button>
      <Link to='/'>
        <img src={mainLogo} alt="Logo paper kawai box" />
      </Link>
      <ul className='menuMobile'>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/products'>Productos</Link></li>
        <li><Link to='/products/best-seller'>Productos mas vendidos</Link></li>
        <li><Link to='/categories'>Categorias</Link></li>
        <li><Link to='/cart'>Carrito</Link></li>
      </ul>
      <button className='buttonMenuMobile'>
        <img src={cartMenu} alt="" />
      </button>
    </nav>

  </header>
  </>
}

export default Navbar