import React, { useState } from 'react'
import {
  BurgerMenu,
  StyledHeader,
  StyledIcon,
  StyledLogo,
  StyledNav,
} from './StyledNavbar'
import NavigationLinks from '../NavigationsLinks/NavigationLinks'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <StyledHeader>
      <NavLink to={'/'}>
        <StyledLogo>
          <StyledIcon />
          <p>REACTIVE</p>
        </StyledLogo>
      </NavLink>

      <AnimatePresence>
        <StyledNav menuOpen={menuOpen}>
          <NavigationLinks />
        </StyledNav>
      </AnimatePresence>

      <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </BurgerMenu>
    </StyledHeader>
  )
}

export default NavBar
