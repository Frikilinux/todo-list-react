import React from 'react'
import { ErrorStyled } from './StyledError'

const Error = ({ children }) => {
  return (
    <ErrorStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </ErrorStyled>
  )
}

export default Error
