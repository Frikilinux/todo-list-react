import React from 'react'
import { StyledLinksContainer, StyledNavLink } from './StyledNavigationLinks'

const NavigationLinks = () => {
  return (
    <StyledLinksContainer>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/todo'>ToDo List</StyledNavLink>
      <StyledNavLink to='/pokeapi'>Poke Api</StyledNavLink>
    </StyledLinksContainer>
  )
}

export default NavigationLinks
