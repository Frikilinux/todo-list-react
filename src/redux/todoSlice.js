import { createSlice } from '@reduxjs/toolkit'
// import { getTodoList } from '../helpers/TodoStore'
// import { setChecked } from '../helpers/tasksActions'

const INITIAL_STATE = {
  tasks: [],
  error: null,
  filter: 'all',
  tasksStat: {}
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    newTask: (state, action) => {
      return { ...state, tasks: [...state.tasks, action.payload], error: null }
    },
    checkTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, checked: !task.checked }
            : task
        ),
        error: null,
      }
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        error: null,
      }
    },
    deleteAll: (state) => {
      return {
        ...state,
        tasks: [],
        error: null,
      }
    },
    isError2: (state, action) => {
      return {
        ...state,
        error: action.payload ?? 'Error desconocido por la actual civilización',
      }
    },
    setFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
        error: null,
      }
    },
    setStats: (state, action) => {
      return {
        ...state, tasksStat: action.payload
      }
    }
  },
})

export const {
  newTask,
  isError2,
  checkTask,
  deleteTask,
  deleteAll,
  setFilter,
  setStats
} = todoSlice.actions

export default todoSlice.reducer
