import { createSlice } from '@reduxjs/toolkit'
import intialPokemon from '../data/pokemonData.json'

const initialState = {
  data: intialPokemon,
  isLoading: false,
  error: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    isFetching: (state) => {
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

export const {isFetching, success, isError} = pokemonSlice.actions

export default pokemonSlice.reducer
