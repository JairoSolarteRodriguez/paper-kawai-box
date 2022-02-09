import Button from '../../components/Button/Button'
import './home.css'

const Home = () =>{
  return(
    <main className="home">
      <h1 className="title">Bienvenidos a <span className="name">Paper Kawai Box</span> cajitas llenas de felicidad</h1>

      <p className="paragraph">Tienda en línea minorista que ofrece artículos de papelería con diseños llamativos y sobrios</p>

      <Button icon={'cart'} text={'Ir a comprar'}/>
    </main>
  )
}

export default Home