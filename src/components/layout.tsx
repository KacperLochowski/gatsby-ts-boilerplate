import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { theme } from 'src/utils/theme'
import { GlobalStyles } from 'src/utils/globalStyles'

import { Header } from './header'

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
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}
