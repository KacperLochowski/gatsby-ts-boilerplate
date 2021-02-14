import React from 'react'
import { Helmet } from 'react-helmet'

interface HeadProps {
  description?: string
  url?: string
  title?: string
}

const Head: React.FC<HeadProps> = ({ description, title, url }) => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
    }}
    title={title}
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
      // TODO: Add support for og:image
      // {
      //   property: 'og:image',
      //   content: logo,
      // },
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
    ]}
  />
)

export default Head
