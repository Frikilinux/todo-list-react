import { styled } from 'styled-components'

export const SectionHome = styled.section`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const CardHome = styled.div`
padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--fg);
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
    width: unset;
  }
`

export const CardHomeImg = styled.img`
border-radius: 10px;
  padding: 20px;
  width: 260px;
  background-color: white;
`

export const CardHomeTitle = styled.h2`
  padding: 15px;
  width: 100%;
  text-align: center;
`
