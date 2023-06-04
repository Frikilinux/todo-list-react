import React from 'react'
import TasksList from '../TaskList/TasksList'
import { MainStyled } from '../Layout/StyledLayout'
import SearchInput from '../UI/Input/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll, isError, newTask } from '../../redux/todoSlice'
import { uuid } from '../utils'
import { ButtonsStyledDelAll } from '../Task/StyledTask'
import { FiXCircle } from 'react-icons/fi'

const ToDo = () => {
  const {tasks, error} = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  console.log(tasks)

  const handlerSubmit = (e, input) => {
    e.preventDefault()

    if (!input) {
      dispatch(isError('Ingresa una nueva tarea, vagales'))
      return
    }

    dispatch(newTask({ task: input, id: uuid(), checked: false }))
    e.target.reset()
  }

  return (
    <MainStyled>
      {' '}
      <h1>ToDo List Reactizada</h1>
      <SearchInput placeholder={'Nueva tarea'} handlerSubmit={handlerSubmit} error={error} />
      {/* <Input /> */}
      <TasksList />
      {tasks.length ? (
        <ButtonsStyledDelAll
          style={{ color: '#313642' }}
          onClick={() => dispatch(deleteAll())}
        >
          <FiXCircle size={'30px'} />
          Borrar todo
        </ButtonsStyledDelAll>
      ) : null}
    </MainStyled>
  )
}

export default ToDo
