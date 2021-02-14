import { createGlobalStyle } from 'styled-components'

import normalize from './normalize'
import fonts from './fonts'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${fonts}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 400;
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyles
