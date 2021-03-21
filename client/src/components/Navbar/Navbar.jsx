import React from 'react'
import { Container, Image, List, ListItem } from './styled'

const Navbar = () => {
  return (
    <Container>
      <div />
      {/* <Image src={null} alt={null}/> */}
      <List>
        <ListItem to='/home'>Home</ListItem>
        <ListItem to='/cadastrar'>Cadastrar</ListItem>
        <ListItem to='/editar'>Editar</ListItem>
      </List>
    </Container>
  )
}

export default Navbar
