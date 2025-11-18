import { useState } from 'react'
import { Button } from './components/Button'
import { Header } from './componentsPages/Header'


import './App.css'
import { Busqueda } from './components/Busqueda'

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

  const [homeUrl, setHomeUrl]  = useState(true);

  const prueba = () => {
    setHomeUrl(!homeUrl)

  }




  return (
    <>
      <Header prueba={prueba}  home = {homeUrl ? 'home' : 'HomeUrl'}  item='item' contacto= 'contacto' ></Header>
      <Busqueda></Busqueda>
      <Button  pruebaFunction={handleClick} label='+' />
      <div>{count} </div>
      <Button  pruebaFunction={handleResta} label='-' />
    </>
  )
}

export default App
