import React, { useContext } from 'react'
import Task from '../Task/Task'
import { TaskListConstext } from '../Context/TasksListContext'
import { TaskListStyled } from './StyledTaskList'

const TasksList = () => {
  const { tasksList } = useContext(TaskListConstext)

  return (
    <TaskListStyled>
      {tasksList.map(({ task, id, checked }) => {
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
