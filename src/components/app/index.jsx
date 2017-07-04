import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import * as actions from 'store/actions'
import './styles.scss'

const hello = () => {
  return (
    <p>Hello, world.</p>
  )
}

class app extends Component {
  constructor(props){
    super(props)
  }

  
  render(){

    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={hello} />
        </Switch>
      </div>
    )
  }
}

export const App = withRouter (
  connect(state => state)(app)
)