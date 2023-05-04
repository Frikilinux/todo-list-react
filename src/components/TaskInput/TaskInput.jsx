import React, { useContext, useState, useEffect } from 'react'
import { uuid } from '../utils'
import { TaskListConstext } from '../Context/TasksListContext'
import { FiPlusCircle } from 'react-icons/fi'
import { ButtonStyled, FormContainer, InputStyled } from './StyledTaskInput'
import Error from '../Error/Error'
import { AnimatePresence } from 'framer-motion'

const Input = () => {
  const { tasksList, saveTask } = useContext(TaskListConstext)

  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [tasksList])

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitData = Object.fromEntries(new FormData(event.target))
    if (!submitData.task) {
      setError('Escribe una tarea!')
      return
    }

    if (tasksList.find(({ task }) => task === submitData.task)) {
      setError('Esa tarea ya existe!')
      return
    }

    if (submitData.task.length > 60) {
      setError('Máximo permitido 60 caracteres')
      return
    }

    saveTask({ ...submitData, id: uuid(), checked: false })

    setError(false)
    event.target.reset()
  }

  return (
    <>
      <FormContainer
        style={{ border: error && '2px solid red' }}
        onSubmit={handleSubmit}
      >
        <InputStyled placeholder='Añade una nueva tarea' name='task' />
        <ButtonStyled>
          <FiPlusCircle size={'30px'} />
        </ButtonStyled>
      </FormContainer>
      <AnimatePresence mode={'popLayout'}>
        {error && <Error>{error}</Error>}
      </AnimatePresence>
    </>
  )
}

export default Input
