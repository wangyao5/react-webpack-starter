const helpers = require('./helpers');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const OptimizeJsPlugin = require('optimize-js-plugin');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
    ENV: ENV
  });
module.exports = function (options) {
	return webpackMerge(commonConfig({env:ENV}), {
        devtool: 'source-map',
        output: {
            path: helpers.root('dist'),
            filename: '[name].[chunkhash].bundle.js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[name].[chunkhash].chunk.js'
        },
        plugins: [
            new OptimizeJsPlugin({
                sourceMap: false
            }),
            new ExtractTextPlugin('[name].[contenthash].css'),
            new UglifyJsPlugin({
                // beautify: true, //debug
                // mangle: false, //debug
                // dead_code: false, //debug
                // unused: false, //debug
                // deadCode: false, //debug
                // compress: {
                //   screw_ie8: true,
                //   keep_fnames: true,
                //   drop_debugger: false,
                //   dead_code: false,
                //   unused: false
                // }, // debug
                // comments: true, //debug

                beautify: false, //prod
                output: {
                    comments: false
                }, //prod
                mangle: {
                    screw_ie8: true
                }, //prod
                compress: {
                    screw_ie8: true,
                    warnings: false, 
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                    negate_iife: false // we need this for lazy v8
               },
            }),            
            new webpack.DefinePlugin({
                'ENV': JSON.stringify(METADATA.ENV),
                'process.env': {
                    'ENV': JSON.stringify(METADATA.ENV),
                    'NODE_ENV': JSON.stringify(METADATA.ENV)
                },
                LOCAL_ROOT: JSON.stringify("http://www.baidu.com"),
                ROOT: JSON.stringify("http://www.xxx.com"),
            })
        ]	    
    });
};
