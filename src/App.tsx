import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>``
    <Button  >
      Default
    </Button>
    <Input placeholder="Enter text here" />
    <Input placeholder="Enter text here" />
    <Input placeholder="Enter text here" />
    <Input placeholder="Enter text here" />
    </>
    
  )
}

export default App
