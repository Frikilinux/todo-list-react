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
    --bg: #171717;
    --fg: #EDEDED;
    --bg2: #444444;
    --blue: #4747ff;
    --error: #d81344;
    --success: #47A992;
    }
`
export default BaseStyles
