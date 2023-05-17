import React, { useContext } from 'react'
import { TaskListConstext } from '../Context/TasksListContext'
import TasksList from '../TaskList/TasksList'
import Input from '../TaskInput/TaskInput'
import { ButtonsStyledDelAll } from '../Task/StyledTask'
import { FiXCircle } from 'react-icons/fi'
import { MainStyled } from '../Layout/StyledLayout'

const ToDo = () => {
  const { tasksList, deleteAllTasks } = useContext(TaskListConstext)

  return (
    <MainStyled>    <h1>ToDo List Reactizada</h1>
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
      ) : null}</MainStyled>
  )
}

export default ToDo
