import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import {
  Container,
  Grid,
  Select,
  Dimmer,
  Loader,
  Message
} from 'semantic-ui-react'
import Card from '../../Components/Card'

const FIELDS = 'id, name, thumbnail, creator { name }'

const QUERY = gql`
  query {
    validToken,
    featured { ${FIELDS} },
    newest { ${FIELDS} },
    popular { ${FIELDS} }
  }
`

const selectOptions = [
  { key: 'pop', value: 'popular', text: 'Popular' },
  { key: 'new', value: 'newest', text: 'Newest' },
  { key: 'fea', value: 'featured', text: 'Featured' }
]

export default ({ history }: RouteComponentProps) => {
  const defaultValue = selectOptions[0].value
  const [selectedOption, selectOption] = useState(defaultValue)
  const { loading, data, error } = useQuery(QUERY)

  !loading && !error && !data.validToken && history.push('/auth')
  error && console.log('error: ', error)
  return (
    <Container>
      <Select
        style={{ marginTop: '50px', marginBottom: '10px' }}
        options={selectOptions}
        defaultValue={defaultValue}
        disabled={!!error}
        onChange={(e, { value }: { value: string }) => selectOption(value)}
      />
      {data && data[selectedOption] && (
        <span style={{ marginLeft: '15px' }}>
          {`${data[selectedOption].length} Things`}
        </span>
      )}
      <Grid columns={5}>
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
          data[selectedOption] &&
          data[selectedOption].map(
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
}
