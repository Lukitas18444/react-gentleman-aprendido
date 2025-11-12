interface Props {
    label: string,
    pruebaFunction: ()=>void
}

export const Button = ({label, pruebaFunction}:Props) => {

  
  return (
    <button onClick={pruebaFunction}> {label} </button>
  )
}
