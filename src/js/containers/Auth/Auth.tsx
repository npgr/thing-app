import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios'
import { AuthMessage, ErrorMessage, WelcomeMessage } from './'

const NO_TOKEN = ''
const LOADING = 'loading'
const ERROR = 'error'
const READY = 'ready'

const getAccessToken = (
  queryString: string,
  setTokenState: React.Dispatch<React.SetStateAction<string>>
) => {
  const code = queryString
    .substr(1)
    .split('&')[1]
    .substr(5)
  //.find(var => var.startsWith('code=')).substr(5)
  axios
    .get(`http://localhost:5000/getToken/${code}`)
    .then(response => {
      const state = response.data.token ? READY : ERROR
      setTokenState(state)
    })
    .catch(error => setTokenState(ERROR))
}

export default ({
  history,
  location: { search: queryString }
}: RouteComponentProps) => {
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
