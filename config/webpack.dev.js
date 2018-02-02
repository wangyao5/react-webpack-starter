const helpers = require('./helpers');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const OptimizeJsPlugin = require('optimize-js-plugin');

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV
});

module.exports = function (options) {
	return webpackMerge(commonConfig({env: ENV}), {
        devtool: 'cheap-module-source-map',
        output: {
            path: helpers.root('dist'),
            filename: '[name].[chunkhash].bundle.js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[name].[chunkhash].chunk.js',
            library: 'ac_[name]',
            libraryTarget: 'var'
        },
        plugins: [
            new OptimizeJsPlugin({
                sourceMap: false
            }),
            new ExtractTextPlugin('[name].[contenthash].css'),
            /**
             * Define const var
             */
            new webpack.DefinePlugin({
                'ENV': JSON.stringify(METADATA.ENV),
                'process.env': {
                    'ENV': JSON.stringify(METADATA.ENV),
                    'NODE_ENV' : JSON.stringify(METADATA.ENV)
                },
                LOCAL_ROOT: JSON.stringify("http://www.baidu.com"),
                ROOT: JSON.stringify("http://www.xxx.com"),
            })
        ],
        devServer: {
            port: METADATA.port,
            host: METADATA.host,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    });
};
