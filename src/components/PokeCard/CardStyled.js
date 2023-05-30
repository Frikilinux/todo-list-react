import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 70%;
  background-color: var(--bg2);
  border-radius: 10px;
  display: flex;
  place-items: center;
`
export const ImgContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: var(--blue);
  border-radius: 10px 0 0 10px;
`

export const PokeImg = styled.img`
  height: 90%;
`

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  font-family: 'Courier New', Courier, monospace;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: var(--fg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg);
  height: 100px;
  width: 100%;
  & div {
    display: flex;
    place-content: center;
    width: 100%;
    /* border: 1px solid var(--fg); */
  }
`
