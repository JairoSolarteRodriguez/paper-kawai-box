import './cart.css'

const MyCart = ( props ) =>{
  let { data, delToCart } = props



  return <>
      {
        data.map(({ id, name, quantity, price, shortDescription, image })=> {
          return(
            <div key={id} className='card-product'>
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
              <button onClick={() => delToCart(id)}>Eliminar Uno</button>
              <button onClick={() => delToCart(id, true)}>Eliminar Todos</button>
            </div>
          )
        })
      }
  </>
}

export default MyCart