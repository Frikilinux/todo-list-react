import React from 'react'
import { FiXCircle, FiCheckCircle, FiCircle } from 'react-icons/fi'
import { ButtonsStyled, TaskStyled } from './StyledTask'
import { useDispatch } from 'react-redux'
import { checkTask, deleteTask } from '../../redux/todoSlice'

const Task = ({ children, id, checked }) => {
const dispatch = useDispatch()

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
        onClick={() => dispatch(checkTask(id))}
      >
        {checked ? <FiCheckCircle /> : <FiCircle />}
      </ButtonsStyled>
      <p style={{ textDecoration: checked && 'line-through' }}>{children}</p>
      <ButtonsStyled
        color='#ff7360'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => dispatch(deleteTask(id))}
      >
        <FiXCircle />
      </ButtonsStyled>
    </TaskStyled>
  )
}

export default Task
