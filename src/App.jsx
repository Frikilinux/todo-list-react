import React from 'react'
import Input from './components/TaskInput/TaskInput'
import AppWrapper from './components/AppWrapper/AppWrapper'
import TasksList from './components/TaskList/TasksList'

const App = () => {
  return (
    <AppWrapper>
      <h1>ToDo List Reactizada</h1>
      <Input />
      <TasksList />
    </AppWrapper>
  )
}

export default App
