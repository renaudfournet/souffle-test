import React from 'react'
import { Container } from 'reactstrap'
import First from './First'
import Fourth from './Fourth'
import Main from './Main'
import Third from './Third'
import Second from './Second'

const Example = props => {
  return (
    <Container>
      <First />
      <Second />
      <Third />
      <Fourth />
    </Container>
  )
}

export default Example
