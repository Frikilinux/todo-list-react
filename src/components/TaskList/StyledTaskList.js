import styled from "styled-components";

export const TaskListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 95%;
  max-width: 800px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
