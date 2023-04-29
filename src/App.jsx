import React, { useState } from 'react'
import Input from './components/TaskInput'
import AppWrapper from './components/AppWrapper'
import TasksList from './components/TasksList'
import { uuid } from './components/utils'

const App = () => {
  const [tasksList, setTasksList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const submitData = Object.fromEntries(new FormData(event.target))
    // const taskitos = fields.get(submitData)

    setTasksList([...tasksList, { task: submitData.task, uuid: uuid() }])

    console.log(tasksList, 'LISTA DE TAGS');
  }
  // const handleNewTask = (task) => setTasksist(task)

  return (
    <AppWrapper>
      <h1>ToDo List Reactizada</h1>
      <Input handleSubmit={handleSubmit} />
      <TasksList tasksList={tasksList} />
    </AppWrapper>
  )
}

export default App
