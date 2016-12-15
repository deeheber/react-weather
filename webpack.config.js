var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + '/app/index.html',
          filename: 'index.html',
          inject: 'body'
      }),
      new ExtractTextPlugin('/styles/bundle.css'),
      new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
          {
            test: /\.js$/, 
            include: __dirname + '/app', 
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          },
          {
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract('style!', 'css?sourceMap')
          }
        ]
    }
}