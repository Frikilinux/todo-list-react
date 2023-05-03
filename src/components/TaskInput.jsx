import React, { useContext } from 'react'
import styled from 'styled-components'
import { uuid } from './utils'
import { TaskListConstext } from './TasksListContext'
import { FiPlusCircle } from 'react-icons/fi'

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  color: #c2c5cd;
  background-color: #3e4553;
  border-radius: 20px;
  padding: 0 5px 0 15px;
  width: 90%;
  max-width: 500px;
`

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #b1d199;
  background-color: transparent;
  font-weight: bold;
`

const InputStyled = styled.input`
  font-size: 1.2rem;
  color: #c2c5cd;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0 10px 0 0;
  width: 100%;
`

const Input = () => {
  const { saveTask } = useContext(TaskListConstext)

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitData = Object.fromEntries(new FormData(event.target))
    if (!submitData.task) return

    saveTask({ ...submitData, id: uuid(), checked: false })

    event.target.reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputStyled placeholder='Cortar el pasto' name='task' />
      <ButtonStyled>
        <FiPlusCircle size={'30px'} />
      </ButtonStyled>
    </FormContainer>
  )
}

export default Input
