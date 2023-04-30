import React from 'react'
import Input from './components/TaskInput'
import AppWrapper from './components/AppWrapper'
import TasksList from './components/TasksList'
import { TaskListConstextProvider } from './components/TasksListContext'

const App = () => {
  return (
    <TaskListConstextProvider>
      <AppWrapper>
        <h1>ToDo List Reactizada</h1>
        <Input />
        <TasksList />
      </AppWrapper>
    </TaskListConstextProvider>
  )
}

export default App
