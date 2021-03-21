import React from 'react'
import { StyledButton } from './styled'

const Button = ({ form, color, onClick, children }) => {
  return (
    <StyledButton form={form} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
