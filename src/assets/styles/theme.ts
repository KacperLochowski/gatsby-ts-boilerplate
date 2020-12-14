import { DefaultTheme } from 'styled-components'

import { Colors, Breakpoints } from 'src/types/styled'

const breakpoints: Breakpoints = {
  huge: '1700px',
  bigDesktop: '1440px',
  desktop: '1150px',
  bigTablet: '1020px',
  tablet: '767px',
  phone: '374px',
}

const colors: Colors = {
  red: 'rgb(202, 33, 40)',
  gray: 'rgb(158, 160, 163)',
  darkgray: 'rgb(55, 56, 60)',
  lightgray: 'rgb(229, 229, 229',
}

const theme: DefaultTheme = {
  ...colors,
  font: {
    weight: {
      regular: '400',
    },
    size: {
      headers: {
        xs: '1.2rem',
        s: '1.6rem',
        m: '2.4rem',
        l: '3.2rem',
        xl: '3.9rem',
        xxl: '6rem',
      },
      body: {
        s: '1.6rem',
        m: '2.4rem',
        l: '3.2rem',
        xl: '6rem',
        xxl: '10rem',
      },
    },
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
    return acc
  }, {} as Record<keyof Breakpoints, string>),
}

export default theme
