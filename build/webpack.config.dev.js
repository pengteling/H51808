const webpack = require('webpack'),
  htmlPlugin = require('html-webpack-plugin'),
  devServer = require('webpack-dev-server'),
  miniCssExtractPlugin = require('mini-css-extract-plugin'),
  copyWebpackPlugin = require('copy-webpack-plugin'),
  VueLoaderPlugin = require('vue-loader/lib/plugin')

merge = require('webpack-merge')
const config = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new miniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css'
    })
  ],
  devServer: {
    contentBase: "./dist",
    inline: true,//实时刷新
    overlay: {
      errors: true//浏览器显示错误
    },
    port: 8888,
    hot: true//启用热更新
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  }
}
module.exports = (env, argv) => {
  console.log(argv.mode)
  const baseConfig = require('./webpack.config.base')(env, argv)
  return merge(baseConfig, config)
}