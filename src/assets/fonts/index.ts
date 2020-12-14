import { css } from 'styled-components'

import poppinsRegularWoof2 from './poppins-v12-latin-ext-400.woff2'
import poppinsRegularWoof from './poppins-v12-latin-ext-400.woff'

const fontFaces = css`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'), url('${poppinsRegularWoof2}') format('woff2'),
      url('${poppinsRegularWoof}') format('woff');
  }
`

export default fontFaces
