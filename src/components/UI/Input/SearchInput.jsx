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
  const [error, setError] = useState(true)

  return (
    <>
      <SearchForm >
        <InputContainer isError={error}>
          <InputText placeholder='Añade una nueva tarea' name='task' />
          <SubmitButton>
            <FiPlusCircle size={'30px'} />
          </SubmitButton>
        </InputContainer>
        <AnimatePresence>
          {error && <Error>Esto es un error!</Error>}
        </AnimatePresence>
      </SearchForm>
      <SubmitButton onClick={() => setError(!error)}>
        <FiPlusCircle size={'30px'} />
      </SubmitButton>
    </>
  )
}

export default SearchInput
