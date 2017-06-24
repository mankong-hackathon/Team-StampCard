let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'client/dist');
let APP_DIR = path.resolve(__dirname, 'client/src');

let config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {test: /\.css/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style!css!less'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = config;