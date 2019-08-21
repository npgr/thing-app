import React from 'react'
import { Message, Icon, Button } from 'semantic-ui-react'

export default ({ history }) => (
  <Message
    positive
    style={{ marginTop: '25vh', maxWidth: '50vw', marginLeft: '10vw' }}
  >
    <Icon name='thumbs up outline' size='big' />
    <Message.Header
      as='h3'
      style={{ display: 'inline-block', marginBottom: '15px' }}
    >
      Welcome !!!
    </Message.Header>
    <p>The application is ready to attend your requests</p>
    <Button
      positive
      content='Explore Things'
      onClick={() => history.push('/')}
      style={{ marginTop: '20px' }}
    />
  </Message>
)
