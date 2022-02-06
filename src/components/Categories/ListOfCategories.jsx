import { Link } from "react-router-dom"
import { allCategories } from "services/data"
import Category from "./Category"
import './categories.css'

const Categories = () =>{
  return(
    <>
      <nav>
       <ul className="wraper">
         {
           allCategories.map(({ id, name, image, active }) => {
             if(active){
               return <li key={id}><Link to={`/products/search/${name}`}><Category name={name} image={image}/></Link></li>
             }else return null;
            })
         }
       </ul>
      </nav>
    </>
  )
}

export default Categories