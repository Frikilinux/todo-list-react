import { styled } from 'styled-components'

export const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  background-color: #aca7a7;
  border-radius: 20px;
  border-color: 1px solid white;
`

export const FilterButton = styled.button`
  padding: 2px 10px;
  background-color: transparent;
  border-radius: 30px;
  border: none;
  &.active {
    font-weight: 500;
    background-color: orange;
  }
`
