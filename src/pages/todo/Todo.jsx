import React, { useEffect } from 'react'
import SearchInput from '../../components/UI/Input/SearchInput'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteAll,
  isError2,
  newTask,
  setFilter,
  setStats,
} from '../../redux/todoSlice'
import { ButtonsStyledDelAll } from '../../components/Task/StyledTask'
import { FiCheckCircle, FiCircle, FiXCircle } from 'react-icons/fi'
import { FilterBar, FilterButton } from './StyledTodo'
import TasksList from '../../components/TaskList/TasksList'
import { MainStyled } from '../../components/Layout/StyledLayout'
import uuid from '../../utils/uuid'

const Todo = () => {
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
            Todas <p>{tasksStat.total}</p>
          </FilterButton>
          <FilterButton
            disabled={tasksStat.total === tasksStat.done}
            className={filter === 'undone' ? 'active' : ''}
            onClick={() => dispatch(setFilter('undone'))}
          >
            <FiCircle /> <p>{tasksStat.total - tasksStat.done}</p>
          </FilterButton>
          <FilterButton
            disabled={!tasksStat.done}
            className={filter === 'done' ? 'active' : ''}
            onClick={() => dispatch(setFilter('done'))}
          >
            <FiCheckCircle /> <p>{tasksStat.done}</p>
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

export default Todo
