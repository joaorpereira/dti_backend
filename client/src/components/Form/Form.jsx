import React from 'react'
import { FormControl, Button } from './styled'

const Form = ({ children, onSubmit }) => {
  return (
    <FormControl type='submit' onSubmit={onSubmit}>
      {children}
      <Button color='cadastrar' type='submit'>
        Enviar
      </Button>
    </FormControl>
  )
}

export default Form
