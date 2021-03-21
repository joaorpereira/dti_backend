import React from 'react'
import { InputItem } from './styled'

const Input = ({ value, name, type, label, onChange }) => {
  return (
    <InputItem>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
      />
    </InputItem>
  )
}

export default Input
