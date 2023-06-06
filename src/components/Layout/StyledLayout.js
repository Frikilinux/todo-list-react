import styled from 'styled-components'

export const LayoutStyled = styled.div`
  min-height: 100vh;
  height: auto;
  min-width: 300px;
  `

export const MainStyled = styled.main`
  color: var(--fg);
  padding: 50px 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: calc(100vh - 70px);
  h1 {
    text-align: center;
  }
`
