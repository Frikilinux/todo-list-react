import React from 'react'
import { LayoutStyled } from './StyledLayout'
import NavBar from '../NavBar/NavBar'
import NavigationLinks from '../NavigationsLinks/NavigationLinks'

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <NavBar>
        <NavigationLinks />
      </NavBar>
      {children}
    </LayoutStyled>
  )
}

export default Layout
