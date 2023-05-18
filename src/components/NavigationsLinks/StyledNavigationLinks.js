import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLinksContainer = styled.ul`
display: flex;
align-items: center;
gap: 15px;
`

export const StyledNavLink = styled(NavLink)`
  font-weight: 400;
  padding: 3px 10px;
  &.active {
    border-radius: 5px;
    background-color: blue;
    color: white;
  }
`
