import React, { useContext } from 'react'
import Input from './components/TaskInput/TaskInput'
import AppWrapper from './components/AppWrapper/AppWrapper'
import TasksList from './components/TaskList/TasksList'
import { FiXCircle } from 'react-icons/fi'
import { TaskListConstext } from './components/Context/TasksListContext'
import { ButtonsStyledDelAll } from './components/Task/StyledTask'

const App = () => {
  const { tasksList, deleteAllTasks } = useContext(TaskListConstext)

  return (
    <AppWrapper>
      <h1>ToDo List Reactizada</h1>
      <Input />
      <TasksList />
      {tasksList.length ? (
        <ButtonsStyledDelAll
          style={{ color: '#313642' }}
          onClick={deleteAllTasks}
        >
          <FiXCircle size={'30px'} />
          Borrar todo
        </ButtonsStyledDelAll>
      ) : null}
    </AppWrapper>
  )
}

export default App
