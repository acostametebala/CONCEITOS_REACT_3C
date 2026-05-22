import { useState } from "react"

export default function Login(){
const [email, setEmail] = useState ('')
const [senha, setSenha] = useState ('')

const entrar = async () => {
    const resultado = await fetch (
        'http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body:  JSON.stringify ({email, senha})
    }
    )
    const data = await resultado.json()    
    console.log(data);
    
}
    return (
        <div> 
            <input type="text" 
                id="email"
                value={email}
                placeholder="Email"
                 onChange={(e) => setEmail (e.target.value)} 
        />
            <input type="text" 
                id="senha"
                value={senha}
                placeholder="Senha"
                 onChange={(e) => setSenha (e.target.value)}     
        />

        <h3>{email}</h3>
        <h3>{senha}</h3>

        <button onClick={() => entrar()}>ENTRAR</button>
        </div>
    )
}