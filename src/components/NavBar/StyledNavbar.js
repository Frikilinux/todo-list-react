import styled from 'styled-components'
import { TbBrandReact } from 'react-icons/tb'
import { motion } from 'framer-motion'

export const StyledHeader = styled.header`
  top: 0;
  z-index: 5;
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: var(--bg2);
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
  transition: all 0.3s ease-in-out;
  @media (max-width: 576px) {
    opacity: ${({ menuOpen }) => `${menuOpen ? 1 : 0}`};
    position: absolute;
    z-index: -20;
    display: flex;
    justify-content: center;
    width: 90%;
    top: 120%;
    min-width: 288px
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
