const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    port: 1234,
    open: true
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }
  ]
},
  mode: 'development'
};
