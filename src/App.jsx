import { useState } from 'react'
import './App.css'

function App() {
  const [carro, setcarro] = useState ('BMW')

  function trocarDeCarro() {
    setcarro ("MUSTANG")
    
  }

  return (
    <>
      <h1>{carro}</h1>
      <button onClick= {trocarDeCarro}>trocarDeCarro</button>
    </>
  )
}

export default App 
