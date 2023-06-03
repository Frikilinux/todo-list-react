import React from 'react'
import {
  CardContainer,
  DataContainer,
  ImgContainer,
  PokeImg,
  PokeTitle,
  Stat,
  StatBar,
  StatsContainer,
} from './CardStyled'
import { StatsIcons } from '../../data/statsIcons'

const Card = (props) => {
  const { stats, name, sprites } = props

  return (
    <CardContainer>
      <ImgContainer>
        <PokeImg
          src={sprites?.other.home.front_default}
          alt={name}
        />
      </ImgContainer>

      <DataContainer>
        <PokeTitle>{name}</PokeTitle>
        <StatsContainer>
          {stats?.map(({ base_stat: baseStat, stat: { name } }) => {
            const Icon = StatsIcons[name]
            return (
              <Stat key={name}>
                <div>
                  <Icon size={40} />
                </div>
                <div>{baseStat}%</div>
                <StatBar heigth={baseStat} />
              </Stat>
            )
          })}
        </StatsContainer>
      </DataContainer>
    </CardContainer>
  )
}

export default Card
