import React from 'react'
import { List, Image } from 'semantic-ui-react'

export default ({ label, value, image }) => (
  <List.Item>
    <List.Content>
      <List.Header style={{ marginBottom: '7px' }}>{label}</List.Header>
      {value || <Image src={image} style={{ marginBottom: '15px' }} />}
    </List.Content>
  </List.Item>
)
