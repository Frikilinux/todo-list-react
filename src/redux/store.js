import { configureStore } from '@reduxjs/toolkit'
import pokeReducer from './pokemonSlice'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    pokemon: pokeReducer,
    todo: todoReducer,
  },
})
