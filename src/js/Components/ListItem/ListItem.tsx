import React from 'react'
import { List, Image } from 'semantic-ui-react'

interface Props {
  label: string
  value?: any
  image?: string
}

export default ({ label, value, image }: Props) => (
  <List.Item>
    <List.Content>
      <List.Header style={{ marginBottom: '7px' }}>{label}</List.Header>
      {value || <Image src={image} style={{ marginBottom: '15px' }} />}
    </List.Content>
  </List.Item>
)
