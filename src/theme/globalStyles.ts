import { ComponentClass } from 'react'
import { createGlobalStyle } from 'styled-components'

import OpenSansWoof2 from 'src/fonts/open-sans-v17-latin-regular.woff2'
import OpenSansWoof from 'src/fonts/open-sans-v17-latin-regular.woff'

export const GlobalStyles: ComponentClass = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url('${OpenSansWoof2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('${OpenSansWoof}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

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
    font-family: 'Open Sans', sans-serif;
  }
`
