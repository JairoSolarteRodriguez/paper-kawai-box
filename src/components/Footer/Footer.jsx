import { Link } from "react-router-dom"
import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return<>
    <footer className="footer">
      <p>
        Copyright {year} - Todos los derechos reservados <Link to='/'>Paper Kawai Box</Link> 
      </p>
    </footer>
  </>
}

export default Footer