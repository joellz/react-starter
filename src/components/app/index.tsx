import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter, Switch } from 'react-router-dom'
import { HelloWorld } from 'app/hello'
import { hot } from 'react-hot-loader'

import './styles.scss'

class app extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return (
      <div className='app'>
        <Switch>
          {
            /* This is an example of how to pass props to a route */
          }

          <Route exact path='/' render={() => <HelloWorld name='World' /> } />

          { 
            /* Otherwise you would just write 
              <Route path='example-path' component={exampleComponent} />
            */
          }
        </Switch>
      </div>
    )
  }
}

export const App = withRouter (
  connect(state => state)(hot(module)(app))
)