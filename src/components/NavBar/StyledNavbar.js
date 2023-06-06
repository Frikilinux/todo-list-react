import styled from 'styled-components'
import { TbBrandReact } from 'react-icons/tb'

export const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: var(--bg);
`

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & p {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--success);
  }
`

export const StyledIcon = styled(TbBrandReact)`
  height: 50px;
  width: auto;
  color: var(--blue);
`

export const StyledNav = styled.nav``
