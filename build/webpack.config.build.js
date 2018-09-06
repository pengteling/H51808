const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css'
    })
  ],
  // devtool: "cheap-module-source-map",
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
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
