import { useState } from "react"
import './login.css'
  
export function Login({ setUser }) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }

        setError(false)

        setUser([nombre])

    }
    
    
   
    return (

        <section className="constainer">

            <h1>Inicio de sesión</h1>

            <form className="login"
                onSubmit={handleSubmit}
            >
                <h3  className="inp">Correo</h3 >
                <input
                    type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <h3 className="inp">Contraseña</h3>
                <input

                    type="password"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />
                <button>Login</button>
            </form>
            {error && <p>Todo los campos son obligatorios</p>}
        </section >
    )
}

