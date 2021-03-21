import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${props => props.theme.colors.info};
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.2);
  padding: 0px 30px;
`
export const Image = styled.img`
  height: 70%auto;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  width: 220px;
  justify-content: space-between;
`
export const ListItem = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.05rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  &:hover {
    color: ${props => props.theme.colors.black};
  }
`
