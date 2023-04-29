import { createGlobalStyle } from 'styled-components'

const BaseStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
  }
  :root {
    --primary: #4747ff;
  }
`
export default BaseStyles
