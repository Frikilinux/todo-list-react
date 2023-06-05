import React, { useEffect } from 'react'
import TasksList from '../../TaskList/TasksList'
import { MainStyled } from '../../Layout/StyledLayout'
import SearchInput from '../../UI/Input/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAll,
  isError2,
  newTask,
  setFilter,
  setStats,
} from '../../../redux/todoSlice'
import { uuid } from '../../utils'
import { ButtonsStyledDelAll } from '../../Task/StyledTask'
import { FiXCircle } from 'react-icons/fi'
import { FilterBar, FilterButton } from './StyledTodo'

const ToDo = () => {
  const { tasks, error, filter, tasksStat } = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setStats({
        total: tasks.length,
        done: tasks.filter((task) => task.checked).length,
      })
    )
  }, [tasks, dispatch])

  const handlerSubmit = (e, input) => {
    e.preventDefault()

    if (!input.trim()) {
      dispatch(isError2('Ingresá una tarea ... vagales'))
      return
    }

    if (
      tasks.some(
        (task) => task.task.toLowerCase() === input.trim().toLowerCase()
      )
    ) {
      dispatch(isError2('La tarea ya existe, ingresá una distinta please'))
      return
    }

    dispatch(newTask({ task: input, id: uuid(), checked: false }))
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
            Todas {tasksStat.total}
          </FilterButton>
          <FilterButton
            disabled={tasksStat.total === tasksStat.done}
            className={filter === 'undone' ? 'active' : ''}
            onClick={() => dispatch(setFilter('undone'))}
          >
            Sin Realizar {tasksStat.total - tasksStat.done}
          </FilterButton>
          <FilterButton
            disabled={!tasksStat.done}
            className={filter === 'done' ? 'active' : ''}
            onClick={() => dispatch(setFilter('done'))}
          >
            Realizadas {tasksStat.done}
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
