import { createSlice } from '@reduxjs/toolkit'
// import { getTodoList } from '../helpers/TodoStore'
// import { setChecked } from '../helpers/tasksActions'

const INITIAL_STATE = {
  tasks: [],
  error: null,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    newTask: (state, action) => {
      return { ...state, tasks: [...state.tasks, action.payload] }
    },
    checkTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, checked: !task.checked }
            : task
        ),
      }
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    },
    deleteAll: (state) => {
      return {
        ...state,
        tasks: [],
      }
    },
    isError: (state, action) => {
      return {
        ...state,
        error: action.payload ?? 'Error desconocido por la actual civilización',
      }
    },
  },
})

export const { newTask, isError, checkTask, deleteTask, deleteAll } =
  todoSlice.actions

export default todoSlice.reducer
