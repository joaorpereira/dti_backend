import styled from 'styled-components'

export const StyledButton = styled.button`
  text-transform: uppercase;
  margin: ${props => (props.form ? '40px 0px 0px 0px' : '0 5px')};
  font-weight: bold;
  font-size: ${props => (props.form ? '1rem' : '0.7rem')};
  letter-spacing: 0.05rem;
  padding: ${props => (props.form ? '0.6rem 0.7rem' : '0.5rem 0.7rem')};
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  transition: 0.3s;
  background-color: ${props =>
    props.color === 'editar'
      ? props.theme.colors.info
      : props.color === 'cadastrar'
      ? props.theme.colors.success
      : props.theme.colors.warning};
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`
