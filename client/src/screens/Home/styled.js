import styled from 'styled-components'

export const Container = styled.main`
  padding: 40px;
  display: flex;
  width: 100%;
  flex: 1;
  height: calc(100% - 60px);
  flex-direction: column;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 24rem;
  height: 24rem;
  color: ${props => props.theme.colors.black};
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 10px;
  }
`
