import React from 'react'
import Task from '../Task/Task'
import { TaskListStyled } from './StyledTaskList'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

const TasksList = () => {
  const { tasks, filter } = useSelector((state) => state.todo)

  const taskListFiltered = () => {
    const filteredTasks = tasks.filter((task) => {
      if (filter === 'done') return task.checked
      if (filter === 'undone') return !task.checked
      return task
    })
    return filteredTasks
  }

  return (
    <TaskListStyled>
      <AnimatePresence>
        {taskListFiltered().map(({ task, id, checked }) => {
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
