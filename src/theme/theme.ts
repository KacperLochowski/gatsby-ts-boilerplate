import { DefaultTheme } from 'styled-components'

import { colors } from './colors'

export const theme: DefaultTheme = {
  colors,
  font: {
    weight: {
      regular: '400',
    },
    family: {
      openSans: 'Open Sans',
    },
    size: {
      headers: {
        m: '1rem',
      },
      body: {
        m: '1rem',
      },
    },
  },
}
