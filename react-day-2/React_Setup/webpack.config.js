var path = require('path');

var config = {
	entry : path.join(__dirname, 'main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: "development",
	devServer: {
		port: 1234
	},

	module:{
		rules : [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets : ['@babel/env', '@babel/react']
			}
		}]
	}
};

module.exports = config;