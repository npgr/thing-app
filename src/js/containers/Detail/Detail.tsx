import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import {
  Container,
  Dimmer,
  Loader,
  List,
  Header,
  Message
} from 'semantic-ui-react'
import QUERY from '../../queries/detailQuery'
import { Thing as thingQueryType } from '../../queries/types/Thing'
import ListItem from '../../Components/ListItem'
import { ApolloError } from 'apollo-client'

const formatedDate = (stringDate: string): string => {
  const date = new Date(stringDate)
  return date.toLocaleDateString()
}

type TParams = { id: string }

export default ({ match: { params } }: RouteComponentProps<TParams>) => {
  const {
    loading,
    data,
    error
  }: {
    loading: boolean
    data: thingQueryType
    error?: ApolloError
  } = useQuery(QUERY, { variables: { id: parseInt(params.id) } })
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
