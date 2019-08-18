import React from 'react'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Container, Grid, Select, Dimmer, Loader } from 'semantic-ui-react'
import Card from '../../Components/Card'

const FIELDS = 'id, name, thumbnail, creator { name }'

const QUERY = gql`
  query {
    featured { ${FIELDS} },
    newest { ${FIELDS} },
    popular { ${FIELDS} }
  }
`

const QUERY_FEATURED = gql`
  query {
    featured { ${FIELDS} }
  }
`

const QUERY_NEWEST = gql`
  query {
    newest { ${FIELDS} }
  }
`

const QUERY_POPULAR = gql`
  query {
    popular { ${FIELDS} }
  }
`
const selectOptions = [
  { key: 'pop', value: 'pop', text: 'Popular' },
  { key: 'new', value: 'new', text: 'Newest' },
  { key: 'fea', value: 'fea', text: 'Featured' }
]

export default withRouter(({ history }) => {
  const { loading, data, error } = useQuery(QUERY)
  error && console.log('error: ', error)
  return (
    <Container style={{ marginTop: '50px' }}>
      <Select
        options={selectOptions}
        defaultValue={selectOptions[0].value}
        style={{ marginBottom: '10px' }}
        //onChange={loadRespectiveData}
      />
      <Grid columns={5}>
        {loading ? (
          <Dimmer active inverted style={{ marginTop: '50px' }}>
            <Loader size='medium'>Loading</Loader>
          </Dimmer>
        ) : (
          data &&
          data.popular &&
          data.popular.map(
            ({ id, name, thumbnail, creator: { name: creatorName } }) => (
              <Grid.Column key={id}>
                <Card
                  key={id}
                  id={id}
                  name={name}
                  thumbnail={thumbnail}
                  creatorName={creatorName}
                  history={history}
                />
              </Grid.Column>
            )
          )
        )}
      </Grid>
    </Container>
  )
})
