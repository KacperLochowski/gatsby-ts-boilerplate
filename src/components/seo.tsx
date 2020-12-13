import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { HelmetProps, Helmet } from 'react-helmet'

import logo from 'src/assets/images/gatsby-icon.png'

interface SeoProps extends HelmetProps {
  description?: string
  lang?: string
  meta?: any[]
  url?: string
}

const Seo: React.FC<SeoProps> = ({ description, lang = 'en', meta = [], title, url }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:image',
          content: logo,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'og:site_name',
          content: title,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: '@lochowski_',
        },
        {
          name: 'twitter:image:alt',
          content: '',
        },
        {
          property: 'fb:app_id',
          content: '',
        },
        {
          name: 'twitter:site',
          content: '',
        },
      ].concat(meta)}
    />
  )
}

export default Seo
