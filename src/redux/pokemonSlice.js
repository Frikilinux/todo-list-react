import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
  isLoading: false,
  error: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    isFecthing: (state) => {
      return {
        ...state,
        isLoading: true,
        error: false,
        data: null,
      }
    },
    success: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      }
    },
    isError: (state) => {
      return {
        ...state,
        data: null,
        isLoading: false,
        error: 'Pokémon no encontrado',
      }
    },
  },

})

export const {isFecthing, success, isError} = pokemonSlice.actions

export default pokemonSlice.reducer
