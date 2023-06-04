import { createSlice } from '@reduxjs/toolkit'
import intialPokemon from '../data/pokemonData.json'

const initialState = {
  data: intialPokemon,
  isLoading: false,
  error: null,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    isFetching: (state) => {
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      }
    },
    success: (state, action) => {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      }
    },
    isError: (state, action) => {
      return {
        ...state,
        data: null,
        isLoading: false,
        error: action.payload??'Pokémon no encontrado',
      }
    },
  },

})

export const {isFetching, success, isError} = pokemonSlice.actions

export default pokemonSlice.reducer
