import styled from 'styled-components'

export const LayoutStyled = styled.div`
  min-height: 100vh;
  height: auto;
  min-width: 300px;
  `

export const MainStyled = styled.main`
  color: #c2c5cd;
  padding: 20px 0;
  background: #313642;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: calc(100vh - 70px);
  h1 {
    text-align: center;
  }
`
