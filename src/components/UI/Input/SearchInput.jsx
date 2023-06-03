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
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon } from '../../../helpers/getPokemon'

const SearchInput = ({ placeholder, handlerSubmit }) => {
  // const [error, setError] = useState(true)
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
