import React from 'react'
import {
  Icon,
  Container,
  Grid,
  Dimmer,
  Loader,
  Message,
  Button
} from 'semantic-ui-react'

const goThingiverse = () => {
  const CLIENT_ID = 'f7c393852e48395078be'
  const CALLBACK_URL = encodeURIComponent('http://localhost:5000/callback')
  const authURL = `https://www.thingiverse.com/login/oauth/authorize?client_id=${CLIENT_ID}&callback_uri=${CALLBACK_URL}`
  window.location.href = 'https://www.thingiverse.com' //authURL
}

export default props => {
  // Check valid for valid token
  // show message (redirect thingiverse) or redirect to Explore

  return (
    <Container>
      {/* <Grid centered> */}
      <Message
        style={{ marginTop: '25vh', maxWidth: '50vw', marginLeft: '10vw' }}
      >
        <Icon name='warning' size='large' />
        <Message.Header as='h3' style={{ display: 'inline-block' }}>
          Authentication needed
        </Message.Header>
        <p>
          In order to access the thingiverse data you must have an account to
          sign in and authorize this application
        </p>
        <Button
          positive
          content='Go To Thingiverse'
          onClick={goThingiverse}
          style={{ marginTop: '20px' }}
        />
      </Message>
      {/* </Grid> */}
    </Container>
  )
}
