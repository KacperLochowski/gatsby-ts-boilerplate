import poppinsRegularWoof2 from './poppins-v12-latin-ext-400.woff2'
import poppinsRegularWoof from './poppins-v12-latin-ext-400.woff'
import poppinsMediumWoof2 from './poppins-v12-latin-ext-500.woff2'
import poppinsMediumWoof from './poppins-v12-latin-ext-500.woff'
import poppinsSemiboldWoof2 from './poppins-v12-latin-ext-600.woff2'
import poppinsSemiboldWoof from './poppins-v12-latin-ext-600.woff'
import poppinsBoldkWoof2 from './poppins-v12-latin-ext-700.woff2'
import poppinsBoldkWoof from './poppins-v12-latin-ext-700.woff'

const fontFaces = `
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'),
      url('${poppinsRegularWoof2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('${poppinsRegularWoof}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: local('Poppins Medium'), local('Poppins-Medium'),
      url('${poppinsMediumWoof2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('${poppinsMediumWoof}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
      url('${poppinsSemiboldWoof2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('${poppinsSemiboldWoof}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: local('Poppins Bold'), local('Poppins-Bold'),
      url('${poppinsBoldkWoof2}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('${poppinsBoldkWoof}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`

export default fontFaces
