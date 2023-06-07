import React from 'react'
import { MainStyled } from '../../components/Layout/StyledLayout'
import { CardHome, CardHomeImg, CardHomeTitle, SectionHome } from './StyledHome'
import pokeimg from '../../assets/pokes.png'
import todoImg from '../../assets/todo.png'
import { NavLink } from 'react-router-dom'
import { StyledNavLink } from '../../components/NavigationsLinks/StyledNavigationLinks'

const Home = () => {
  return (
    <MainStyled>
      <SectionHome>
        <CardHome>
          <NavLink to={'/pokeapi'}>
            <CardHomeImg src={pokeimg} />
          </NavLink>
          <CardHomeTitle>Poke Api</CardHomeTitle>
        </CardHome>
        <CardHome>
          <NavLink to={'/todo'}>
            <CardHomeImg src={todoImg} />
          </NavLink>

          <CardHomeTitle>Todo List</CardHomeTitle>
        </CardHome>
      </SectionHome>
    </MainStyled>
  )
}

export default Home
