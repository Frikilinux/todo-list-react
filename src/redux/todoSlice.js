import { createSlice } from '@reduxjs/toolkit'
import { getTodoList } from '../helpers/TodoStore'

const initialState = getTodoList()

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    newTask: (state, action) => {
      return [...state, action.payload]
    },
  },
})

export const {newTask} = todoSlice.actions

export default todoSlice.reducer
