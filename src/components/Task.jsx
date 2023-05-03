import React, { useContext } from 'react'
import styled from 'styled-components'
import { TaskListConstext } from './TasksListContext'
import { motion } from 'framer-motion'
import { FiXCircle, FiCheckCircle } from 'react-icons/fi'

const TaskStyled = styled(motion.li)`
  color: #c2c5cd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 200px;
  padding: 10px 5px 10px 20px;
  width: 95%;
  /* border: 2px solid whitesmoke; */
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
const ButtonsStyled = styled(motion.button)`
  background-color: transparent;
  padding: 0 10px;
  cursor: pointer;
  color: ${({ color }) => `${color}`};
  font-size: 30px;
`

const Task = ({ children, id, checked }) => {
  const { deleteTask, checkTask } = useContext(TaskListConstext)

  return (
    <TaskStyled
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <p style={{ textDecoration: checked && 'line-through' }}>{children}</p>
      <ButtonsStyled
        color='#b1d199'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => checkTask(id)}
      >
        <FiCheckCircle />
      </ButtonsStyled>
      <ButtonsStyled
        color='#ff7360'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => deleteTask(id)}
      >
        <FiXCircle />
      </ButtonsStyled>
    </TaskStyled>
  )
}

export default Task
