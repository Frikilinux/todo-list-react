import React from 'react'
import styled from 'styled-components'

const WrapperStyle = styled.main`
  color: #dacdcd;
  padding: 20px 0;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 100vh;
  min-width: 300px;
  h1 {
    text-align: center;
  }
`

const AppWrapper = ({ children }) => {
  return <WrapperStyle>{children}</WrapperStyle>
}

export default AppWrapper
