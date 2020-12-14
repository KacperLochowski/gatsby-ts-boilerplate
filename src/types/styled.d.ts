import 'styled-components'

interface Breakpoints {
  huge: string
  bigDesktop: string
  desktop: string
  bigTablet: string
  tablet: string
  phone: string
}
interface Font {
  weight: FontWeight
  size: FontSize
}
interface FontWeight {
  regular: string
}

interface FontSize {
  headers: FontSizeHeader
  body: FontSizeBody
}

interface FontSizeHeader {
  xs: string
  s: string
  m: string
  l: string
  xl: string
  xxl: string
}

interface FontSizeBody {
  s: string
  m: string
  l: string
  xl: string
  xxl: string
}

interface Colors {
  red: string
  gray: string
  darkgray: string
  lightgray: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    font: Font
    mq: Record<keyof Breakpoints, string>
  }
}
