import styled from 'styled-components'

export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  padding: 30px;
  margin-top: 2rem;
`
export const Button = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  padding: 0.6rem 0.7rem;
  margin-top: 30px;
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
