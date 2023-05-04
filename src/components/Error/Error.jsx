import React from 'react'
import { ErrorStyled } from './StyledError'

const Error = ({children}) => {

  return (
    <ErrorStyled>{children}</ErrorStyled>
  )
}

export default Error
