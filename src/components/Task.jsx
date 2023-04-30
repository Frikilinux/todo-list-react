import React, { useContext } from 'react'
import styled from 'styled-components'
import { TaskListConstext } from './TasksListContext'

const TaskStyled = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  height: 50px;
  width: 500px;
  background-color: green;
`

const Task = ({ children, id }) => {
  const { deleteTask } = useContext(TaskListConstext)

  return (
    <TaskStyled id={id}>
      <p>{children}</p>
      <button onClick={() => deleteTask(id)}>borrar</button>
    </TaskStyled>
  )
}

export default Task
