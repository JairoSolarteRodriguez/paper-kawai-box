import ListOfProducts from "components/ListOfProducts/ListOfProducts"
import { useParams } from "react-router-dom"

const Products = () =>{
  const { best } = useParams()
  
  return(
    <>
      <ListOfProducts/>
    </>
  )
}

export default Products