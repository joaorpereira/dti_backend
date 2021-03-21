import styled from 'styled-components'

export const InputItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  label {
    font-weight: bold;
  }
  input {
    padding: 4px;
    margin-left: 5px;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
  }
`
