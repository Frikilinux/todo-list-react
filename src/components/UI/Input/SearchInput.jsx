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
import { useSelector } from 'react-redux'

const SearchInput = ({ placeholder, handlerSubmit }) => {

  const [input, setInput] = useState('')

  const { error } = useSelector((state) => state.pokemon)

  return (
    <SearchForm onSubmit={(e) => handlerSubmit(e, input)}>
      <InputContainer isError={error}>
        <InputText
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          name='task'
        />
        <SubmitButton>
          <FiPlusCircle size={'30px'} />
        </SubmitButton>
      </InputContainer>
      <AnimatePresence>{error && <Error>{error}</Error>}</AnimatePresence>
    </SearchForm>
  )
}

export default SearchInput
