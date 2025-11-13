interface Props{
    home: string,
    item: string,
    contacto: string
}


export const Header = ({home, item, contacto}:Props) => {




  return (
    <div> <a href="#">{home}</a> {item} {contacto} </div>
  )
}
