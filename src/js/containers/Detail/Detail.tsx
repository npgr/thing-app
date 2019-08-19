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
      added
      modified
      default_image {
        url
      }
    }
  }
`

const formatedDate = stringDate => {
  const date = new Date(stringDate)
  return date.toLocaleDateString()
}

export default ({ match: { params } }) => {
  // Go top when mount
  const { loading, data, error } = useQuery(QUERY, {
    variables: { id: parseInt(params.id) }
  })
  error && console.log('error: ', error)
  return (
    <Container>
      {loading ? (
        <Dimmer active inverted style={{ marginTop: '110px' }}>
          <Loader size='medium'>Loading</Loader>
        </Dimmer>
      ) : error ? (
        <Message negative style={{ marginTop: '140px' }}>
          <Message.Header>
            An Error has ocurred during the load of Data !!!
          </Message.Header>
        </Message>
      ) : (
        data &&
        data.thing && (
          <List size='large' style={{ marginTop: '60px' }}>
            <ListItem label='Id:' value={data.thing.id} />
            <ListItem label='Thing Name:' value={data.thing.name} />
            <ListItem label='License:' value={data.thing.license} />
            <ListItem label='Creator:' value={data.thing.creator.name} />
            <ListItem label='Added:' value={formatedDate(data.thing.added)} />
            <ListItem
              label='Modified:'
              value={formatedDate(data.thing.modified)}
            />
            <ListItem label='Description:' value={data.thing.description} />
            {data.thing.default_image && (
              <ListItem label='Image:' image={data.thing.default_image.url} />
            )}
          </List>
        )
      )}
    </Container>
  )
}
