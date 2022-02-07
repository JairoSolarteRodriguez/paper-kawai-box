import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from 'assets/icons/mainLogo.svg'
import menuIcon from 'assets/icons/menuIcon.svg'
import cartMenu from 'assets/icons/cartMenu.svg'
import closeIcon from 'assets/icons/closeIcon.svg'
import './navbar.css'


const Navbar = () => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }
 
 return<>
  <header>
    <nav className='navbar fixed'>
      <button className='buttonMenuMobile' onClick={toggleActive} onSuspend={toggleActive}>
        <img src={active? closeIcon : menuIcon} alt="icono menu" />
      </button>
      <Link to='/'>
        <img src={mainLogo} alt="Logo paper kawai box" />
      </Link>
      <ul className={active ? 'menu-mobile active' : 'menu-mobile'}>
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