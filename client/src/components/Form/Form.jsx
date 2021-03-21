import React from 'react'
import { FormControl } from './styled'

const Form = ({ children, onSubmit }) => {
  return (
    <FormControl type='submit' onSubmit={onSubmit}>
      {children}
    </FormControl>
  )
}

export default Form
