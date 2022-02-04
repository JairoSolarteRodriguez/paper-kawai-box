import { Link } from 'react-router-dom'

const Navbar = () => {
  return<>
  <header>
    <Link to='/'>Logo</Link>
    <nav>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/products'>Productos</Link></li>
        <li><Link to='/products/best-seller'>Productos mas vendidos</Link></li>
        <li><Link to='/categories'>Categorias</Link></li>
        <li><Link to='/cart'>Carrito</Link></li>
      </ul>
    </nav>
  </header>
  </>
}

export default Navbar