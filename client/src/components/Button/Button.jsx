import React from 'react'
import { StyledButton } from './styled'

const Button = ({ color, onClick, children }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
