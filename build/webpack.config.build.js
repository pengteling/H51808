const webpack = require('webpack'),
  htmlPlugin = require('html-webpack-plugin'),
  devServer = require('webpack-dev-server'),
  miniCssExtractPlugin = require('mini-css-extract-plugin'),
  copyWebpackPlugin = require('copy-webpack-plugin'),
  VueLoaderPlugin = require('vue-loader/lib/plugin')

merge = require('webpack-merge')
const config = {
  plugins: [    
    new miniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css'
    })
  ], 
  // devtool: "cheap-module-source-map", 
  optimization:{
    splitChunks:{
      chunks:'all',
      name:'vendors'
    },
    runtimeChunk:{
      name:'runtime'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },      
      {
        test: /\.scss$/,
        use: [
          miniCssExtractPlugin.loader, 
          'css-loader',            
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  }
}
module.exports = (env, argv) => {
  console.log(argv.mode)
  const baseConfig = require('./webpack.config.base')(env, argv)
  return merge(baseConfig, config)
}