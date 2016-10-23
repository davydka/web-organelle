var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		'bundle': './app.jsx'
	},
	output: {
		path: './build',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	node: {
		  fs: "empty"
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader : 'babel'
			}
		]
	}
};
