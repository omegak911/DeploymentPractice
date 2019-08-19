var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: ['file-loader'], 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};