import 'styled-components'

interface Font {
  family: FontFamily
  weight: FontWeight
  size: FontSize
}

interface FontFamily {
  openSans: string
}

interface FontWeight {
  regular: string
}

interface FontSize {
  headers: FontSizeHeader
  body: FontSizeBody
}

interface FontSizeHeader {
  m: string
}

interface FontSizeBody {
  m: string
}

interface Colors {
  main: string
  secondary: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    font: Font
    colors: Colors
  }
}
