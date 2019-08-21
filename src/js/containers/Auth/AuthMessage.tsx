import React from 'react'
import { Message, Icon, Button } from 'semantic-ui-react'

const goThingiverse = (): void => {
  const CLIENT_ID = 'f7c393852e48395078be'
  const CALLBACK_URL = 'http://localhost:8080/auth'
  const authURL = `https://www.thingiverse.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}`
  window.location.href = authURL
}

export default () => (
  <Message style={{ marginTop: '25vh', maxWidth: '50vw', marginLeft: '10vw' }}>
    <Icon name='hand point right outline' size='big' />
    <Message.Header
      as='h3'
      style={{ display: 'inline-block', marginBottom: '15px' }}
    >
      Authentication needed
    </Message.Header>
    <p>
      In order to access the thingiverse data you must have an account to sign
      in and authorize this application
    </p>
    <Button
      positive
      content='Go To Thingiverse'
      onClick={goThingiverse}
      style={{ marginTop: '20px' }}
    />
  </Message>
)
