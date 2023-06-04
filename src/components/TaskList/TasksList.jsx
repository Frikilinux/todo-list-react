import React from 'react'
import Task from '../Task/Task'
import { TaskListStyled } from './StyledTaskList'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

const TasksList = () => {
  const {tasks} = useSelector((state) => state.todo)

  return (
    <TaskListStyled>
      <AnimatePresence>
        {tasks.map(({ task, id, checked }) => {
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
