import { Routes } from 'react-router-dom'
import './App.css'
import { generateRoutes } from './routes'


function App() {
  return (
    <Routes>
      {generateRoutes()}
    </Routes>
  )
}

export default App
