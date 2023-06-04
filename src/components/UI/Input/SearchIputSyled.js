import styled from 'styled-components'

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 90%;
  max-width: 700px;
  height: 78px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  color: #c2c5cd;
  background-color: #3e4553;
  border-radius: 20px;
  padding: 0 5px 0 15px;
  border: ${({ error }) =>
    `2px dashed ${error ? 'var(--error)' : 'transparent'}`};
  width: 100%;
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #b1d199;
  background-color: transparent;
  font-weight: bold;
`

export const InputText = styled.input`
  font-size: 1.2rem;
  color: #c2c5cd;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0 10px 0 0;
  width: 100%;
`
