import { css } from 'styled-components'

// Poppins
import poppinsRegularWoof2 from 'src/assets/fonts/poppins-v15-latin-400.woff2'
import poppinsRegularWoof from 'src/assets/fonts/poppins-v15-latin-400.woff'
import poppinsSemiWoof2 from 'src/assets/fonts/poppins-v15-latin-600.woff2'
import poppinsSemiWoof from 'src/assets/fonts/poppins-v15-latin-600.woff'
import poppinsBoldWoof2 from 'src/assets/fonts/poppins-v15-latin-700.woff2'
import poppinsBoldWoof from 'src/assets/fonts/poppins-v15-latin-700.woff'

// Roboto
import robotoMedWoof2 from 'src/assets/fonts/poppins-v15-latin-400.woff2'
import robotoMedWoof from 'src/assets/fonts/poppins-v15-latin-400.woff'
interface Font {
  name: string
  normal: FontWeights
  italic?: FontWeights
}

interface FontWeights {
  [key: number]: string[]
}

const poppinsWeights: FontWeights = {
  400: [poppinsRegularWoof, poppinsRegularWoof2],
  600: [poppinsSemiWoof, poppinsSemiWoof2],
  700: [poppinsBoldWoof, poppinsBoldWoof2],
}

const robotoWeights: FontWeights = {
  500: [robotoMedWoof, robotoMedWoof2],
}

const poppins: Font = {
  name: 'Poppins',
  normal: poppinsWeights,
}

const roboto: Font = {
  name: 'Roboto',
  normal: robotoWeights,
}

const createFontFaces = (family: Font, style = 'normal'): string => {
  let styles = ''

  Object.entries(family[style]).forEach(([weight, formats]: [string, string[]]) => {
    const woff = formats[0]
    const woff2 = formats[1]

    styles += css`
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
      }
    `
  })

  return styles
}

const fontFacePoppins = createFontFaces(poppins)
const fontFaceRoboto = createFontFaces(roboto)

const fonts = css`
  ${fontFacePoppins + fontFaceRoboto}
`

export default fonts
