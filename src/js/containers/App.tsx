import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Explore from './Explore'
import Detail from './Detail'

export default () => (
  <Router>
    <h2>Thing App</h2>
    <Link to='/'>Explore</Link>
    <div>
      <Link to='/detail/xx'>Detail</Link>
    </div>
    <Route exact path='/' component={Explore} />
    <Route path='/detail/:id' component={Detail} />
    <Redirect to='/' />
  </Router>
)
