import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from 'assets/icons/mainLogo.svg'
import menuIcon from 'assets/icons/menuIcon.svg'
import cartMenu from 'assets/icons/cartMenu.svg'
import './navbar.css'


const Navbar = () => {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

  const removeMenu = () => {
    setTimeout(() => {
      setActive(!active)
    }, 1);
  }

  return<>
  <header>
    <nav className='navbar'>
      <button className='buttonMenuMobile' onClick={toggleMenu} onBlur={removeMenu}>
        <img src={menuIcon} alt="icono menu" />
      </button>
      <Link to='/'>
        <img src={mainLogo} alt="Logo paper kawai box" />
      </Link>
      <ul className={active ? 'menuMobile active' : 'menuMobile'}>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/products'>Productos</Link></li>
        <li><Link to='/products/best-seller'>Productos mas vendidos</Link></li>
        <li><Link to='/categories'>Categorias</Link></li>
        <li><Link to='/cart'>Carrito</Link></li>
      </ul>
      <Link to='/cart'>
        <button className='buttonMenuMobile'>
          <img src={cartMenu} alt="" />
        </button>
      </Link>
    </nav>

  </header>
  </>
}

export default Navbar