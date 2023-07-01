import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/login'
import { Profile } from './pages/Profile'
import { Registration } from './pages/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/login' element= {<Login/>}></Route>
      <Route path='/profile' element= {<Profile/>}></Route>
      <Route path='registration' element= {<Registration/>}></Route>
     </Routes>
    </>
  )
}

export default App
