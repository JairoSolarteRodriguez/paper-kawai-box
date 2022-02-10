const Category = ( props ) => {
  const { name, image } = props

  return<>
    <div>
      <img src={image} alt={name} className='category-image'/>
      <h3>{name}</h3>
    </div>
  </>
}

export default Category