const webpack = require('webpack')
const merge = require('webpack-merge')

const config = {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    inline: true, // 实时刷新
    overlay: {
      errors: true// 浏览器显示错误
    },
    port: 8888,
    hot: true, // 启用热更新
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        resourceQuery: /blockType=docs/,
        loader: require.resolve('./docs-loader.js')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // // 开启 CSS Modules
              // modules: false,
              // // 自定义生成的类名
              // localIdentName: '[path]-[name]-[hash:base64:5]',
              // camelCase: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
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
