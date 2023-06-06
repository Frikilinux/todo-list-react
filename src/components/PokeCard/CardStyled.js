import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 80%;
  max-width: 900px;
  min-width: 288px;
  background-color: var(--bg2);
  border-radius: 10px;
  display: flex;
  @media (max-width: 996px) {
    flex-direction: column;
  }
`
export const ImgContainer = styled.div`
  /* padding: 40px; */
  display: flex;
  place-content: center;
  background-color: var(--fg);
  border-radius: 10px 0 0 10px;
  @media (max-width: 996px) {
    flex-wrap: wrap;
    border-radius: 10px 10px 0 0;
  }
`

export const PokeImg = styled.img`
  width: 250px;
  margin: 25px;
`

export const DataContainer = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const PokeTitle = styled.div`
  color: var(--fg);
  font-weight: 600;
  padding: 10px;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
`

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 576px) {
  }
`

export const Stat = styled.div`
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: var(--fg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg2);
  height: 100px;
  max-width: 100px;
  width: 80px;
  & div {
    display: flex;
    place-content: center;
    width: 90%;
  }
  @media(max-width: 996px) {
  }
`

export const StatBar = styled.div`
  bottom: 0;
  opacity: 0.3;
  z-index: 1;
  position: absolute;
  background-color: ${({ heigth }) => (heigth > 100 ? 'red' : 'green')};
  height: calc(${({ heigth }) => (heigth > 100 ? 100 : heigth)}% - 5px);
  border-radius: 5px 5px 0 0;
`
