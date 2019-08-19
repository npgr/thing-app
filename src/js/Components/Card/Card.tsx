import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default ({ id, name, thumbnail, creatorName, history }) => (
  <Card onClick={() => history.push(`/detail/${id}`)}>
    <Card.Content>
      <Card.Header style={{ fontSize: '1.1em' }}>{name}</Card.Header>
    </Card.Content>
    <Image src={thumbnail} wrapped ui={false} />
    <Card.Content extra>
      <Icon name='user' />
      {creatorName}
    </Card.Content>
  </Card>
)
