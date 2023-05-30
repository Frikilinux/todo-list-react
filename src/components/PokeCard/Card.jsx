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
import { useSelector } from 'react-redux'

const Card = () => {
  const { data } = useSelector((state) => state.pokemon)

  return (
    <CardContainer>
      <ImgContainer>
        <PokeImg
          src={data?.sprites.other.home.front_default}
          alt={data?.name}
        />
      </ImgContainer>

      <DataContainer>
        <PokeTitle>{data?.name}</PokeTitle>
        <StatsContainer>
          {data?.stats.map(({ base_stat, stat: { name } }) => {
            const Icon = StatsIcons[name]
            return (
              <Stat key={name}>
                <div>
                  <Icon size={40} />
                </div>
                <div>{base_stat}%</div>
                <StatBar heigth={base_stat} />
              </Stat>
            )
          })}
        </StatsContainer>
      </DataContainer>
    </CardContainer>
  )
}

export default Card
