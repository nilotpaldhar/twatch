const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimiseAssetsPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[contentHash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [autoprefixer()]
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // Extract css into files
					'css-loader', // 2. Turn css into commonjs
					'postcss-loader',
					'sass-loader' // 1. Turns sass into css
				]
			}
		]
	}
});
