import { Link } from "react-router-dom"
import { allProducts } from "services/data"

const Categories = () =>{
  const allCategories = ['pacto']
  allProducts.map(({ category, id }) => allCategories.push({category, id}))

  return(
    <>
      <nav>
        <ul>
          {
            allCategories.map((cat)=> {
              return(
                <li key={cat.id}>
                  <Link to={`/products/${cat.category}`}>{cat.category}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Categories