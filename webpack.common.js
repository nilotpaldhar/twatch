const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		vendor: './src/vendor',
		main: './src/index'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						esModule: false,
						name: '[name].[hash].[ext]',
						outputPath: 'assets',
						publicPath: './assets/',
						useRelativePaths: true
					}
				}
			}
		]
	},
	plugins: [
		new CopyPlugin([
			{
				from: './src/assets/sprite.svg',
				to: './assets/'
			}
		])
	]
};
