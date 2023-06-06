import React from 'react'
import {
  StyledLinksContainer,
  StyledNavLink,
  TasksCount,
} from './StyledNavigationLinks'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const NavigationLinks = () => {
  const { tasksStat } = useSelector((state) => state.todo)
  const location = useLocation()
  return (
    <StyledLinksContainer>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/todo'>
        ToDo List
        {tasksStat.total !== 0 && location.pathname !== '/todo' ? (
          <AnimatePresence>
            <TasksCount
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
            >
              {tasksStat.total - tasksStat.done} / {tasksStat.total}
            </TasksCount>
          </AnimatePresence>
        ) : (
          ''
        )}
      </StyledNavLink>
      <StyledNavLink to='/pokeapi'>Poke Api</StyledNavLink>
    </StyledLinksContainer>
  )
}

export default NavigationLinks
