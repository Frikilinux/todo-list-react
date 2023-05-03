import React, { useContext, useState } from 'react'
import { uuid } from '../utils'
import { TaskListConstext } from '../Context/TasksListContext'
import { FiPlusCircle } from 'react-icons/fi'
import { ButtonStyled, FormContainer, InputStyled } from './StyledTaskInput'

const Input = () => {
  const { saveTask } = useContext(TaskListConstext)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitData = Object.fromEntries(new FormData(event.target))
    if (!submitData.task) {
      setError(true)
      return
    }

    saveTask({ ...submitData, id: uuid(), checked: false })

    event.target.reset()
    setError(false)
  }

  return (
    <FormContainer
      style={{ border: error && '1px solid red' }}
      onSubmit={handleSubmit}
    >
      <InputStyled placeholder='Cortar el pasto' name='task' />
      <ButtonStyled>
        <FiPlusCircle size={'30px'} />
      </ButtonStyled>
    </FormContainer>
  )
}

export default Input
