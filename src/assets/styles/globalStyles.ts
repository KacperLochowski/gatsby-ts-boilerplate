import { createGlobalStyle } from 'styled-components'

import fontFaces from 'src/assets/fonts'

const globalStyles = createGlobalStyle`
  ${fontFaces}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 300;
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
  }
`

export default globalStyles
