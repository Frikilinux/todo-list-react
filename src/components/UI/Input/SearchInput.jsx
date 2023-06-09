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

const SearchInput = ({ placeholder, handlerSubmit, error }) => {
  const [input, setInput] = useState('')

  return (
    <SearchForm
      onSubmit={(e) => {
        handlerSubmit(e, input)
        setInput('')
      }}
    >
      <InputContainer error={error}>
        <InputText
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          value={input}
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
