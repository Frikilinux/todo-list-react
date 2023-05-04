import React, { useContext } from 'react'
import Task from '../Task/Task'
import { TaskListConstext } from '../Context/TasksListContext'
import { TaskListStyled } from './StyledTaskList'
import { AnimatePresence } from 'framer-motion'

const TasksList = () => {
  const { tasksList } = useContext(TaskListConstext)

  return (
    <TaskListStyled>
      <AnimatePresence mode={'popLayout'}>
        {tasksList.map(({ task, id, checked }) => {
          return (
            <Task key={id} id={id} checked={checked}>
              {task}
            </Task>
          )
        })}
      </AnimatePresence>
    </TaskListStyled>
  )
}

export default TasksList
