const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const vueLoaderConfig = require('./vue-loader.config')

module.exports = (env, argv) => {
  return {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: './js/[name]-[hash:8].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['*', '.js', '.vue', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, '../src/components'),
        'vue$': 'vue/dist/vue.common.js'
      }
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html', // html 模板文件
        // chunks : ['index'],//引入的js对应的chuank
        // excludeChunks: ['demo'],//排除对应的chuank
        inject: 'body', // 引入的位置
        filename: 'index.html', // 处理后导出的文件名
        title: '首页'
      }),
      // new copyWebpackPlugin([{
      //   from: __dirname +'/src/assets',
      //   to:'./assets/'//dist
      // }])
      new VueLoaderPlugin()
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue|jsx)$/,
          loader: 'eslint-loader',
          options: {
            fix: true
          },
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: vueLoaderConfig(argv.mode === 'development')
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8 * 1024, // 转base64
                name: '[name].[ext]', // ext 代表文件原本后缀
                outputPath: 'img/'// 导出的位置
              }
            }
          ]
        },
        {
          test: /\.(htm|html)$/i,
          loader: 'html-withimg-loader'
        }
      ]
    }
  }
}
