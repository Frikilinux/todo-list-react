import React from 'react'
import TasksList from '../../TaskList/TasksList'
import { MainStyled } from '../../Layout/StyledLayout'
import SearchInput from '../../UI/Input/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAll,
  isError2,
  newTask,
  setFilter,
} from '../../../redux/todoSlice'
import { uuid } from '../../utils'
import { ButtonsStyledDelAll } from '../../Task/StyledTask'
import { FiXCircle } from 'react-icons/fi'
import { FilterBar, FilterButton } from './StyledTodo'

const ToDo = () => {
  const { tasks, error, filter } = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const handlerSubmit = (e, input) => {
    e.preventDefault()

    if (!input) {
      dispatch(isError2('Ingresa una nueva tarea, vagales'))
      return
    }

    dispatch(newTask({ task: input, id: uuid(), checked: false }))
    e.target.reset()
  }

  return (
    <MainStyled>
      <h1>ToDo List Reactizada</h1>
      <SearchInput
        placeholder={'Nueva tarea'}
        handlerSubmit={handlerSubmit}
        error={error}
      />
      {tasks.length ? (
        <FilterBar>
          <FilterButton
            className={filter === 'all' ? 'active' : ''}
            onClick={() => dispatch(setFilter('all'))}
          >
            Todas
          </FilterButton>
          <FilterButton
            className={filter === 'undone' ? 'active' : ''}
            onClick={() => dispatch(setFilter('undone'))}
          >
            Sin Realizar
          </FilterButton>
          <FilterButton
            className={filter === 'done' ? 'active' : ''}
            onClick={() => dispatch(setFilter('done'))}
          >
            Realizadas
          </FilterButton>
        </FilterBar>
      ) : null}

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