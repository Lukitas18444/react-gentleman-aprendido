import { useEffect, useState } from "react"

interface Props{
    name:[]
}


export const Busqueda = () => {
  
    const  [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const fecthData = async () =>{
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            const jsonData = await response.json()

            setData(jsonData)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        fecthData()
    },[data])
  
    if (loading){
        return <div> Cargando...</div>
    }
    
  
  
    return (
        <div>

            <div> {data.name} </div>
            <div> {data.height} </div>
            {/* <img src = {data.sprites.front_default} /> */}
        </div>
    
  )
}
