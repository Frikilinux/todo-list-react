import React from 'react'
import styled from 'styled-components'
import SearchInput from '../UI/Input/SearchInput'
import { MainStyled } from '../Layout/StyledLayout'

const StyledPokeLogo = styled.div`
  display: flex;
  justify-content: center;
`

const PokeApi = () => {
  return (
    <MainStyled>
      {' '}
      <StyledPokeLogo>
        <img src='../src/assets/pokemon_logo.svg' alt='Log de Pokémon' />
      </StyledPokeLogo>
      <SearchInput />
    </MainStyled>
  )
}

export default PokeApi
