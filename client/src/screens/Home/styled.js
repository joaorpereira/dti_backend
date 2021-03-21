import styled from 'styled-components'

export const Container = styled.main`
  padding: 40px;
  display: flex;
  width: 100%;
  flex: 1;
  height: calc(100% - 60px);
  flex-direction: column;
  align-items: center;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 24rem;
  height: 24rem;
  margin-top: 1.5rem;
  width: 100%;
  color: ${props => props.theme.colors.black};
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 10px;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 24px 0px 18px;
`