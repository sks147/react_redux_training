import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import counterStore from './Store';

// Provider provides the store
// hydrate is used for server side rendering
ReactDOM.hydrate(
	<Provider store={counterStore}>
		<BrowserRouter>
			<React.Fragment>
				<Route path='/' exact component={Counter}></Route>
			</React.Fragment>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)