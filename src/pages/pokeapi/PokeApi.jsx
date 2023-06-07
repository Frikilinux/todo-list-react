import React from 'react'
import styled from 'styled-components'
import SearchInput from '../../components/UI/Input/SearchInput'
import { MainStyled } from '../../components/Layout/StyledLayout'
import Card from '../../components/PokeCard/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from '../../helpers/getPokemon'
import { isError } from '../../redux/pokemonSlice'
import pokeLogo from '../assets/pokemon_logo.svg'
import { StyledPokeLogo } from './StyledPokeApi'



const PokeApi = () => {
  const { data, error } = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()

  const handlerSubmit = (e, input) => {
    e.preventDefault()

    if (!input) {
      dispatch(isError('Ingresa un ID o nombre de Pokémon'))
      return
    }

    dispatch(fetchPokemon(e, input))
  }

  return (
    <MainStyled>
      <StyledPokeLogo>
        <img src={pokeLogo} alt='Logo de Pokémon' />
      </StyledPokeLogo>
      <SearchInput
        placeholder={'Nombre o ID del Pokémon'}
        handlerSubmit={handlerSubmit}
        error={error}
      />
      {data && <Card {...data} />}
    </MainStyled>
  )
}

export default PokeApi
