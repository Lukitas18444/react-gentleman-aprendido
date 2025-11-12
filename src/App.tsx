import { useState } from 'react'
import { Button } from './components/Button'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
    console.log(count)
  }
  const handleResta = () => {
    setCount(count - 1)
    console.log(count)
  }

  return (
    <>

      <Button  pruebaFunction={handleClick} label='+' />
      <div>{count} </div>
      <Button  pruebaFunction={handleResta} label='-' />
    </>
  )
}

export default App
