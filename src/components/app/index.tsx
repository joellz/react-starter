import React, { Component, SFC } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { HelloWorld } from 'app/hello'

import './styles.scss'

class app extends Component <any, any> {
  constructor(props){
    super(props)
  }

  
  render(){

    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={HelloWorld} />
        </Switch>
      </div>
    )
  }
}

export const App = withRouter (
  connect(state => state)(app)
)