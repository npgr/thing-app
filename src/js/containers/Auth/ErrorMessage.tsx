import React from 'react'
import { Message } from 'semantic-ui-react'

export default () => (
  <Message
    warning
    style={{ marginTop: '25vh', maxWidth: '50vw', marginLeft: '10vw' }}
    icon='exclamation'
    header='Error Loading Token'
    content='An Error has ocurred when loading Thingiverse Token'
  />
)
