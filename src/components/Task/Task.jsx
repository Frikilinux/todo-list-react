import React, { useContext } from 'react'
import { TaskListConstext } from '../Context/TasksListContext'
import { FiXCircle, FiCheckCircle, FiCircle } from 'react-icons/fi'
import { ButtonsStyled, TaskStyled } from './StyledTask'

const Task = ({ children, id, checked }) => {
  const { deleteTask, checkTask } = useContext(TaskListConstext)

  return (
    <TaskStyled
      id={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.2 }}
    >
      <ButtonsStyled
        style={{ color: checked ? '#b1d199' : '#63b4ff' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => checkTask(id)}
      >
        {checked ? <FiCheckCircle /> : <FiCircle />}
      </ButtonsStyled>
      <p style={{ textDecoration: checked && 'line-through' }}>{children}</p>
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
