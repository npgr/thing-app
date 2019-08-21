import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

interface Props {
  id: number
  name: string
  thumbnail: string
  creatorName: string
}

export default ({
  id,
  name,
  thumbnail,
  creatorName,
  history
}: RouteComponentProps & Props) => (
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
