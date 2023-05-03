import React, { useContext } from 'react'
import styled from 'styled-components'
import { TaskListConstext } from './TasksListContext'
import { motion } from 'framer-motion'

const TaskStyled = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  background-color: green;
  & p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: calc(100% - 70px);
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
const ButtonStyled = styled(motion.button)`
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`

const Task = ({ children, id }) => {
  const { deleteTask } = useContext(TaskListConstext)

  return (
    <TaskStyled
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <p>{children}</p>
      <ButtonStyled
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 800, damping: 10 }}
        onClick={() => deleteTask(id)}
      >
        borrar
      </ButtonStyled>
    </TaskStyled>
  )
}

export default Task
