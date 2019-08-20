import React, { useState } from 'react'
import axios from 'axios'
import {
  Icon,
  Container,
  Dimmer,
  Loader,
  Message,
  Button
} from 'semantic-ui-react'

const NO_TOKEN = ''
const LOADING = 'loading'
const ERROR = 'error'
const READY = 'ready'

const goThingiverse = () => {
  const CLIENT_ID = 'f7c393852e48395078be'
  const CALLBACK_URL = 'http://localhost:8080/auth'
  const authURL = `https://www.thingiverse.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}`
  window.location.href = authURL
}

const getAccessToken = (queryString, setTokenState) => {
  const code = queryString
    .substr(1)
    .split('&')[1]
    .substr(5)
  //.find(var => var.startsWith('code=')).substr(5)
  axios
    .get(`http://localhost:5000/getToken/${code}`)
    .then(response => {
      const state = !!response.token ? READY : ERROR
      setTokenState(state)
    })
    .catch(error => setTokenState(ERROR))
}

const AuthMessage = () => (
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

const WelcomeMessage = ({ history }) => (
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

const ErrorMessage = () => (
  <Message
    warning
    style={{ marginTop: '25vh', maxWidth: '50vw', marginLeft: '10vw' }}
    icon='error'
    header='Error Loading Token'
    content='An Error has ocurred when loading Thingiverse Token'
  />
)

export default ({ history, location: { search: queryString } }) => {
  const [tokenState, setTokenState] = useState(queryString ? LOADING : NO_TOKEN)
  tokenState === LOADING && getAccessToken(queryString, setTokenState)
  console.log('token state: ', tokenState)
  return (
    <Container>
      {!tokenState && <AuthMessage />}
      {tokenState === LOADING && (
        <Dimmer active inverted style={{ marginTop: '40px' }}>
          <Loader size='medium'>Loading Token</Loader>
        </Dimmer>
      )}
      {tokenState === READY && <WelcomeMessage history={history} />}
      {tokenState === ERROR && <ErrorMessage />}
    </Container>
  )
}
