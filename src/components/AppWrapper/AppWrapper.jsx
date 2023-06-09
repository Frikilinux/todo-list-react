import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.main`
  color: #c2c5cd;
  padding: 20px 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100vh;
  min-width: 300px;
  h1 {
    text-align: center;
  }
`

const AppWrapper = ({ children }) => {
  return <WrapperStyle>{children}</WrapperStyle>
}

export default AppWrapper
