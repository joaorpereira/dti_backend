import React from 'react'
import { Container, List, ListItem } from './styled'

const Navbar = () => {
  return (
    <Container>
      <div />
      <List>
        <ListItem to='/home'>Home</ListItem>
        <ListItem to='/cadastrar'>Cadastrar</ListItem>
      </List>
    </Container>
  )
}

export default Navbar
