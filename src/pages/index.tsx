import React from 'react'
import styled from 'styled-components'

import Head from 'src/components/head'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage: React.FC = () => (
  <Wrapper>
    <Head title='Home' />
    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>Poppins: 400</p>
    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Poppins: 600</p>
    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>Poppins: 700</p>
    <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>Roboto: 500</p>
  </Wrapper>
)

export default IndexPage
