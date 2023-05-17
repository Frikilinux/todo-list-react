import React from 'react'
import { StyledHeader, StyledIcon, StyledLogo, StyledNav } from './StyledNavbar'
import NavigationLinks from '../NavigationsLinks/NavigationLinks'

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <StyledIcon />
        <p>REACTIVE</p>
      </StyledLogo>
      <StyledNav>
        <NavigationLinks />
      </StyledNav>
    </StyledHeader>
  )
}

export default NavBar
