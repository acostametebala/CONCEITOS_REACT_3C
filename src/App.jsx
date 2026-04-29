import { useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/cadastro'
import Usuarios from './paginas/usuarios'

function App() {
  const [tela, setTela] = useState ('login')

  const trocarDeTela = (pagina) => {
    setTela(pagina)
  }

  const renderizar = () =>{
    if(tela === 'login'){
      return <Login/>
    } else if (tela === 'cadastro'){
      return <Cadastro/>
    } 
    else if (tela === 'Usuarios'){
      return <Usuarios/>
    }
    else {
      return <Login/>
    } 
    }

  return (
    <>
      <button onClick={() => trocarDeTela('cadastro')}>Cadastro</button>
      <button onClick={() => trocarDeTela('login')}>Login</button>
      <button onClick={() => trocarDeTela('usuarios')}>USUARIOS</button>
      <hr />
      {renderizar()}
    </>
  )

}
export default App 
