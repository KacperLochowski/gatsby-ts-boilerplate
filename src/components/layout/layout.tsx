import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { theme } from 'src/theme/theme'
import { GlobalStyles } from 'src/theme/globalStyles'

import Header from 'src/components/header'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data: StaticQueryProps = useStaticQuery(graphql`
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
    </ThemeProvider>
  )
}
