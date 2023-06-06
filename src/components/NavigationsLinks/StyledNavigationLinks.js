import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  padding: 3px 10px;
  color: var(--fg);
  text-decoration: none;
  &.active {
    border-radius: 5px;
    background-color: var(--blue);
    color: white;
  }
`

export const TasksCount = styled(motion.div)`
font-size: 0.5rem;
background-color: var(--error);
opacity: 0.7;
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 1px 4px;
  border-radius: 4px;
  border: 1px solid var(--fg);
`
