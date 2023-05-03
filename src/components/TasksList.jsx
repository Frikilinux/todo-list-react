import React, { useContext } from 'react'
import Task from './Task'
import { TaskListConstext } from './TasksListContext'
import styled from 'styled-components'

const TaskListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 95%;
  max-width: 600px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const TasksList = () => {
  const { tasksList } = useContext(TaskListConstext)

  return (
    <TaskListStyled>
      {tasksList.map(({ task, id, checked }) => {
        // console.log(task, id, 'MAP')
        return (
          <Task key={id} id={id} checked={checked}>
            {task}
          </Task>
        )
      })}
    </TaskListStyled>
  )
}

export default TasksList
