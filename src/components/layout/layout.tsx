import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { theme } from 'src/theme/theme'
import { GlobalStyles } from 'src/theme/globalStyles'

import { Header } from '../header'

export const Layout: React.FC = ({ children }) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}
