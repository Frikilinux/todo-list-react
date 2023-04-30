import React, { useContext} from 'react'
import Task from './Task'
import { TaskListConstext } from './TasksListContext'

const TasksList = () => {
  const { tasksList } = useContext(TaskListConstext)

  return tasksList.map(({ task, id }) => {
    // console.log(task, id, 'MAP')
    return (
      <Task key={id} id={id}>
        {task}
      </Task>
    )
  })
}

export default TasksList
