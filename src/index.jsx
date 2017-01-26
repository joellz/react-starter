import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { mainReducer, initialState } from './redux'
import thunkMiddleware from 'redux-thunk'
import Home from 'home'
import App from 'app'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const store = createStoreWithMiddleware(mainReducer)

render ((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route component={App}>
					<Route path='/' component={Home} />
			</Route>
		</Router>
	</Provider>
),document.querySelector('.view'))
