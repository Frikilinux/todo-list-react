import React from 'react'
import styled from 'styled-components'
import SearchInput from '../UI/Input/SearchInput'
import { MainStyled } from '../Layout/StyledLayout'
import Card from '../PokeCard/Card'
import pokemonData from '../../data/pokemonData.json'

const StyledPokeLogo = styled.div`
  display: flex;
  justify-content: center;
`

const PokeApi = () => {
  return (
    <MainStyled>
      <StyledPokeLogo>
        <img src='../src/assets/pokemon_logo.svg' alt='Log de Pokémon' />
      </StyledPokeLogo>
      <SearchInput />
      <Card data={pokemonData}/>
    </MainStyled>
  )
}

export default PokeApi
