import React from 'react'
import styled from 'styled-components'

const StyledPokeLogo = styled.div`
  display: flex;
  justify-content: center;
`

const PokeApi = () => {
  return (
    <StyledPokeLogo>
      <img src='../src/assets/pokemon_logo.svg' alt='Log de Pokémon' />
    </StyledPokeLogo>
  )
}

export default PokeApi
