import React, { useContext } from 'react'
import styled from 'styled-components'
import { uuid } from './utils'
import { TaskListConstext } from './TasksListContext'

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background-color: #939393;
  border-radius: 10px;
  padding-left: 15px;
  width: 90%;
  max-width: 500px;
`

const ButtonStyled = styled.button`
  height: 100%;
  border-radius: 0 10px 10px 0;
  padding: 5px 10px;
  cursor: pointer;
  color: #282828;
  background-color: red;
  font-weight: bold;
`

const InputStyled = styled.input`
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

    saveTask({ ...submitData, id: uuid() })

    event.target.reset()
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputStyled placeholder='Cortar el pasto' name='task' />
      <ButtonStyled>New task</ButtonStyled>
    </FormContainer>
  )
}

export default Input
