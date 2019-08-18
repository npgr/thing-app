import React from 'react'
import { Container, Dimmer, Loader } from 'semantic-ui-react'

export default ({ match: { params } }) => {
  return (
    <Container style={{ marginTop: '50px' }}>
      <h2>Detail of Thing {params.id}</h2>
    </Container>
  )
}
