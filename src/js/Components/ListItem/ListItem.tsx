import React from 'react'
import { List, Image } from 'semantic-ui-react'

export default ({ label, value }) => (
  <List.Item>
    <List.Content>
      <List.Header style={{ marginBottom: '7px' }}>{label}</List.Header>
      {value}
    </List.Content>
  </List.Item>
)
