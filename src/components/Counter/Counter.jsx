const Counter = ( props ) => {
  const { cant, setCant } = props

  const add = () => setCant( cant + 1)

  const remove = () => setCant( cant - 1)

  return<div>
    <button onClick={remove}>-</button>
    {cant}
    <button onClick={add}>+</button>
  </div>
}

export default Counter