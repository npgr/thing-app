import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import {
  Container,
  Dimmer,
  Loader,
  List,
  Header,
  Message
} from 'semantic-ui-react'
import ListItem from '../../Components/ListItem'

const QUERY = gql`
  query Thing($id: Int) {
    thing(id: $id) {
      id
      name
      creator {
        id
        name
      }
      license
      description
    }
  }
`

export default ({ match: { params } }) => {
  // Go top when mount
  const { loading, data, error } = useQuery(QUERY, {
    variables: { id: parseInt(params.id) }
  })
  console.log('data: ', data)
  error && console.log('error: ', error)
  return (
    <Container style={{ marginTop: '60px' }}>
      {loading ? (
        <Dimmer active inverted style={{ marginTop: '50px' }}>
          <Loader size='medium'>Loading</Loader>
        </Dimmer>
      ) : error ? (
        <Message negative style={{ marginTop: '80px' }}>
          <Message.Header>
            An Error has ocurred during the load of Data !!!
          </Message.Header>
        </Message>
      ) : (
        data &&
        data.thing && (
          <List size='large'>
            <ListItem label='Id:' value={data.thing.id} />
            <ListItem label='Name:' value={data.thing.name} />
            <ListItem label='License:' value={data.thing.license} />
            <ListItem label='Creator Name:' value={data.thing.creator.name} />
            <ListItem label='Description:' value={data.thing.description} />
          </List>
        )
      )}
    </Container>
  )
}
