import { useEffect, useState } from "react"

interface Props{
    data:string
}

export const Busqueda = () => {
  
    const  [data, setData] = useState('Hola')
    
    useEffect(()=>{
        setData('holaa')
        console.log(data)
    },[data])
  
  
  
  
    return (
    <div> {data} </div>
  )
}
