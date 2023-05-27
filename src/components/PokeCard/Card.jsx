import React from 'react'
import pokemonData from '../../data/pokemonData.json'
import {
  CardContainer,
  DataContainer,
  ImgContainer,
  PokeImg,
  PokeTitle,
  Stat,
  StatsContainer,
} from './CardStyled'
import { StatsIcons } from '../../data/statsIcons'
import { GiEdgedShield, GiFist, GiPointySword, GiStrong } from 'react-icons/gi'

const Card = ({ data }) => {
  console.log(data)

  // console.log({StatsIcons.hp});

  return (
    <CardContainer>
      <ImgContainer>
        <PokeImg src={data.sprites.other.home.front_default} alt={data.name} />
      </ImgContainer>

      <DataContainer>
        <PokeTitle>{pokemonData.name}</PokeTitle>
        <StatsContainer>
          <Stat >
            <div><GiStrong/></div>
            <div>{pokemonData.stats[0].base_stat}</div>
          </Stat>
          <Stat >
            <div><GiFist/></div>
            <div>{pokemonData.stats[1].base_stat}</div>
          </Stat>
          <Stat >
            <div><GiEdgedShield/></div>
            <div>{pokemonData.stats[2].base_stat}</div>
          </Stat>
          <Stat >
            <div><GiPointySword/></div>
            <div>{pokemonData.stats[3].base_stat}</div>
          </Stat>
          <Stat >
            <div>{pokemonData.stats[4].stat.name}</div>
            <div>{pokemonData.stats[4].base_stat}</div>
          </Stat>
          <Stat >
            <div>{pokemonData.stats[5].stat.name}</div>
            <div>{pokemonData.stats[5].base_stat}</div>
          </Stat>
        </StatsContainer>
      </DataContainer>
    </CardContainer>
  )
}

export default Card
