import React from 'react'
import styled from 'styled-components'
import SearchInput from '../UI/Input/SearchInput'
import { MainStyled } from '../Layout/StyledLayout'
import Card from '../PokeCard/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from '../../helpers/getPokemon'
import { isError } from '../../redux/pokemonSlice'
import pokeLogo from '../../assets/pokemon_logo.svg'

const StyledPokeLogo = styled.div`
  display: flex;
  justify-content: center;
`

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
    e.target.reset()
  }

  return (
    <MainStyled>
      <StyledPokeLogo>
        <img src={pokeLogo} alt='Log de Pokémon' />
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
