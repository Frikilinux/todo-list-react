import { motion } from "framer-motion"
import styled from "styled-components"

export const TaskStyled = styled(motion.li)`
  color: #c2c5cd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 200px;
  padding: 10px 10px;
  width: 95%;
  background-color: #3e4553;

  & p {
    font-family: 'Handlee';
    font-size: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: calc(100% - 70px);
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const ButtonsStyled = styled(motion.button)`
  display: grid;
  place-content: center;
  background-color: transparent;
  padding: 0 10px;
  cursor: pointer;
  color: ${({ color }) => `${color}`};
  font-size: 30px;
`
