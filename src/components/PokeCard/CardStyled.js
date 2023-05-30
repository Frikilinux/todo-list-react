import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 70%;
  max-width: 900px;
  background-color: var(--bg2);
  border-radius: 10px;
  display: flex;
  /* justify-content: space-between; */
`
export const ImgContainer = styled.div`
  /* padding: 40px; */
  display: flex;
  place-content: center;
  background-color: var(--fg);
  border-radius: 10px 0 0 10px;
`

export const PokeImg = styled.img`
  width: 250px;
  margin: 25px;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
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
  justify-content: center;
  background-color: cadetblue;
  width: 100%;
`

export const Stat = styled.div`
  border-top: 1px solid var(--bg);
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
  width: 100%;
  & div {
    display: flex;
    place-content: center;
    width: 90%;
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
