import { useState, useRef } from 'react'
import './Style.css'
import { v4 } from 'uuid'

function Home() {
  const [prod, setProd] = useState([])
  const inputRef = useRef()

  function addProd() {
    if (inputRef.current.value){
      setProd([{
        key: v4(),
        produto: inputRef.current.value
      }, ...prod])
      inputRef.current.value = ''
    }
  }

  function deleteProd(id) {
    setProd(prod.filter(prod => prod.key !== id))
  }
  return (
    <div className='container'>

      <h1>Lista de Compras</h1>

      <p>
        <input type="text" placeholder='Digite o nome do produto' ref={inputRef} />
        <button id='add'onClick={addProd}>Adicionar</button>
      </p>

      {
        prod.map((produto) => (
          <p id='items' key={produto.key}>
            <span>{produto.produto}</span>
            <button onClick={() => deleteProd(produto.key)}>🗑️</button>
          </p>
        ))
      }

    </div>
  )
}

export default Home
