import React from 'react'
import { Link } from 'gatsby'

import Seo from 'src/components/seo'
import Image from 'src/components/image'

const IndexPage: React.FC = () => (
  <div>
    <Seo title='Home' />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to='/page-2/'>Go to page 2</Link>
  </div>
)

export default IndexPage
