import React from 'react'
import { ErrorStyled } from './StyledError'

const Error = ({ children }) => {
  return (
    <ErrorStyled
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      {children}
    </ErrorStyled>
  )
}

export default Error
