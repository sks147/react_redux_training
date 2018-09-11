import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// var Provider = require('react-redux');
import {Provider} from 'react-redux';
import counterStore from './Store';
// import {Counter} from './Components/Counter'
import CounterContainer from './Containers/CounterContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// Provider provides the store
// hydrate is used for server side rendering
ReactDOM.hydrate(
	<Provider store={counterStore}>
		<BrowserRouter>
			<React.Fragment>
				<Route path='/' exact component={CounterContainer}></Route>
			</React.Fragment>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
)