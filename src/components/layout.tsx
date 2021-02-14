import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'src/assets/styles/theme'
import GlobalStyles from 'src/assets/styles/globalStyles'

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <main>{children}</main>
  </ThemeProvider>
)

export default Layout
