import React from 'react'
import styled from 'styled-components'

const TaskStyled = styled.article`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  height: 50px;
  width: 500px;
  background-color: green;
`

const Task = ({ children, uuid }) => {
  return <TaskStyled id={uuid} >{children}</TaskStyled>
}

export default Task
