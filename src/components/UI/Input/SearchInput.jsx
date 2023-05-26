import React, { useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import Error from '../../Error/Error'
import { AnimatePresence } from 'framer-motion'
import {
  InputContainer,
  InputText,
  SearchForm,
  SubmitButton,
} from './SearchIputSyled'

const SearchInput = () => {
  const [error, setError] = useState(false)

  return (
    <SearchForm>
      <InputContainer error={true}>
        <InputText placeholder='Añade una nueva tarea' name='task' />
        <SubmitButton>
          <FiPlusCircle size={'30px'} />
        </SubmitButton>
      </InputContainer>
      <AnimatePresence>
        <Error>Esto es un error!</Error>
      </AnimatePresence>
    </SearchForm>
  )
}

export default SearchInput
