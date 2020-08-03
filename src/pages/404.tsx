import React from 'react'

import { Layout } from 'src/components/layout/layout'
import Seo from 'src/components/seo'

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => (
  <Layout>
    <Seo title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
