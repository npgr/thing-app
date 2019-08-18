import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import Explore from './Explore'
import Detail from './Detail'

export default () => (
  <Router>
    <Menu fixed='top'>
      <Menu.Header style={{ margin: '10px' }}>
        <h3>Thing App</h3>
      </Menu.Header>
    </Menu>

    <Route exact path='/' component={Explore} />
    <Route path='/detail/:id' component={Detail} />
    <Redirect to='/' />
  </Router>
)
