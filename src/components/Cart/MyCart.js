import './cart.css'

const MyCart = ( props ) =>{
  let { data, delToCart } = props



  return <>
      {
        data.map(({ id, name, quantity, price, shortDescription, image })=> {
          return(
            <div key={id} className='card-product'>
              <button onClick={() => delToCart(id, true)} className='remove-all'>X</button>
              <section className='info-product'>
                <div>
                  <img src={image} alt={name} />
                  <p>${new Intl.NumberFormat("es-CO").format(price * quantity)} cop</p>
                </div>
                <div>
                  <h3>{name} ({quantity})</h3>
                  <p>{shortDescription}</p>
                </div>
              </section>
              <button onClick={() => delToCart(id)}>Quitar Uno</button>
            </div>
          )
        })
      }
  </>
}

export default MyCart