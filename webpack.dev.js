const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
})

