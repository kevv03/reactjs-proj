import Home from './components/Home'
import Error from './components/Error'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='first'>
        <nav className="navbar">
          <NavLink to="/">
            Películas
          </NavLink>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
