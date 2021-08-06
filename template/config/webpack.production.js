const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'none',// 在webpack-cli 4.2.0 版本中devtool 不能添加
  plugins: [
    new CleanWebpackPlugin(),
  ],
})
