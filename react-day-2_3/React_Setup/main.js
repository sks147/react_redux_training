import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import AddDefect from './Components/AddDefect';
import FilterTable from './Components/FilterTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

// injecting this data into DefectTable Component
var DEFECTS = [
	{
		id:0,
		category: "UI",
		description: "Button not appearing",
		priority: 3,
		status: "Open"
	},
	{
		id:1,
		category: "funtionality",
		description: "submit not working",
		priority: 1,
		status: "Open"
	},
	{
		id:2,
		category: "Change Request",
		description: "Implement Certificate Functionality",
		priority: 2,
		status: "Open"
	}
]

localStorage.setItem('defects', JSON.stringify(DEFECTS));
// localStorage stores the data only in string format

ReactDOM.render(
	// <App data={DEFECTS} />,
	// document.getElementById('app')
	// <AddDefect />,
	// document.getElementById('app')

	<BrowserRouter>
		<React.Fragment>
			<ul>
				<li><Link to='/view-defects'> View Defects</Link></li>
				<li><Link to='/'>Add Defects</Link></li>
				<li><Link to='/filter-defects'>Filter Defects</Link></li>
			</ul>
			<Route path="/" exact component={AddDefect} />
			<Route path="/view-defects/:count" component={App} />
			<Route path="/filter-defects" component={FilterTable} />
		</React.Fragment>
	</BrowserRouter>
	,document.getElementById('app')

	// <FilterTable />,
	// document.getElementById('app')
);