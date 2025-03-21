import  {Login} from "./pages/Login";
import  {Home} from "./pages/home";
import { useState } from 'react'
import './App.css'

function App() {
    const [user, setUser] = useState([])
    return (
        <>
        <header className="title"> 
        <p className="title-2">Bienestar </p>
        <p className="title-2">Estudiantil </p>
        </header>
        <div className="App" >
            {
               
                !user.length > 0
                    ? <Login setuser={setUser} />
                    : < Home user={user} setUser={setUser} />
            }
        </div >
        </>
    )
}
export default App;