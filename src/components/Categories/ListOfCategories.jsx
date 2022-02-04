import { Link } from "react-router-dom"
import { allCategories } from "services/data"
import Category from "./Category"

const Categories = () =>{
  return(
    <>
      <nav>
       <ul>
         {
           allCategories.map(({ id, name, image }) => (
             <li key={id}><Link to={`/products/search/${name}`}><Category name={name} image={image}/></Link></li>
           ))
         }
       </ul>
      </nav>
    </>
  )
}

export default Categories