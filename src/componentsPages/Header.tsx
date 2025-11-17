import './styleHeader.css'


interface Props{
    home: string,
    item: string,
    contacto: string,
    prueba: () => void,

}


export const Header = ({home, item, contacto, prueba}:Props) => {



  return (
    <div className="Header" > <a onClick={prueba} href="#">{home}</a> {item} {contacto} </div>
  )
}
