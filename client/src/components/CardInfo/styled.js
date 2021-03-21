import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 97%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 4.2rem;
  border-radius: 0.5rem;
  padding: 0.6rem 1.8rem;
  transition: all 0.3s;
  > p {
    font-weight: 500;
    font-size: 1.1rem;
  }

  margin: 0.5rem 0rem;
  :last-child {
    margin-bottom: 2rem;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
`
export const RowInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`

export const Button = styled.button`
  text-transform: uppercase;
  margin: 0 5px;
  font-weight: bold;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0.7rem;
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  transition: 0.3s ;
  background-color: ${props =>
    props.color === 'editar'
      ? props.theme.colors.info
      : props.theme.colors.warning};
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`
