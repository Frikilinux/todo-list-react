import { styled } from 'styled-components'

export const TodoTitle = styled.h1`
font-size: 2.5rem;
font-weight: 400;
  padding: 10px;
  color: var(--fg);
`

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 5px;
  background-color: #aca7a7;
  border-radius: 20px;
  border-color: 1px solid white;
  max-width: 90%;
`

export const FilterButton = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
  width: 80px;
  padding: 2px 10px;
  background-color: transparent;
  border-radius: 30px;
  border: none;
  p {
    font-weight: 600;
  }
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: var(--fg);
    font-weight: 500;
    background-color: var(--blue);
  }
`
