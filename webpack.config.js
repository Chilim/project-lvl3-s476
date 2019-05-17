const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
};
