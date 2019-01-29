import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { mainReducer } from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'
import { App } from 'app'

import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

const store = createStore(mainReducer, composeWithDevTools(
	applyMiddleware(thunkMiddleware)
))

render ((
	<Provider store={store}>
		<Router history={createHistory()}>
			<Route component={App} />
		</Router>
	</Provider>
),document.querySelector('.view'))
