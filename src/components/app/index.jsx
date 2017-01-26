import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {...this.props.appState})
    })
    return (
      <div className='app'>
        {children}
      </div>
    )
  }
}
export default connect(state => state)(App)
