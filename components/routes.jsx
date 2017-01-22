import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import Home from 'home';
import Root from 'root';


render (
	<Router history={browserHistory}>
	    <Route component={Root}>
	        <Route path='/'  component={Home} />
	    </Route>
	</Router>,
document.querySelector('.view'));
