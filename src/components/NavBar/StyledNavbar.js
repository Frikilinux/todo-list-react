import styled from 'styled-components'
import { TbBrandReact } from 'react-icons/tb'

export const StyledHeader = styled.header`
  z-index: 20;
  position: relative;
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

export const StyledNav = styled.nav`
  animation: translate 0.5s ease-in-out;
  @media (max-width: 576px) {
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 90%;
    position: absolute;
    transform: translate(
      ${({ menuOpen }) => `0%, ${menuOpen ? '150' : '-180'}%`}
    );
  }
`

export const BurgerMenu = styled.button`
font-size: 1.5rem;
background-color: transparent;
border: none;
color: var(--fg);
  display: none;
  @media (max-width: 576px) {
    display: flex;
  }
`
