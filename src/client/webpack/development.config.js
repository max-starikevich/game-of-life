const path = require('path')
const merge = require('webpack-merge')
const {contextPath, baseConfig} = require('./base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(contextPath, 'dist'),
    host: '0.0.0.0',
    port: '8080',
    historyApiFallback: true,
    proxy: {
      '/socket.io/': {
        target: 'http://backend:3000/socket.io/',
        ws: true
      }
    }
  },
})