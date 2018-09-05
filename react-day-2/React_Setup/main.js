import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

// injecting this data into DefectTable Component
var DEFECTS = [
	{
		category: "UI",
		description: "Button not appearing",
		priority: 3,
		status: "Open"
	},
	{
		category: "funtionality",
		description: "submit not working",
		priority: 1,
		status: "Open"
	},
	{
		category: "Change Request",
		description: "Implement Certificate Functionality",
		priority: 2,
		status: "Open"
	}
]

ReactDOM.render(
	<App data={DEFECTS} />,
	document.getElementById('app')
);