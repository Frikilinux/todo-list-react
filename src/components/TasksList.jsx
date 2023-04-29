import React from 'react'
import Task from './Task'

const TasksList = ({ tasksList }) => {
  return tasksList.map(({ task, uuid }, i) => {
    return <Task key={uuid} uuid={uuid}>{task}</Task>
  })
}

export default TasksList
