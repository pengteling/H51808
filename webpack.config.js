const webpack = require('webpack'),  
  htmlPlugin = require('html-webpack-plugin'),
  devServer = require('webpack-dev-server'),
  miniCssExtractPlugin = require('mini-css-extract-plugin'),
  copyWebpackPlugin = require('copy-webpack-plugin')
  VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: './js/[name]-[hash:8].js',
    publicPath: '/'
  },
  plugins: [    
    new htmlPlugin({
      template: './src/index.html',//html 模板文件
      // chunks : ['index'],//引入的js对应的chuank 
      //excludeChunks: ['demo'],//排除对应的chuank
      inject: 'body',//引入的位置
      filename: 'index.html',//处理后导出的文件名
      title: '首页'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new miniCssExtractPlugin({
      filename: 'css/[name]-[hash:8].css'
    }),
    // new copyWebpackPlugin([{
    //   from: __dirname +'/src/assets',
    //   to:'./assets/'//dist
    // }])
    new VueLoaderPlugin()
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
        test: /\.js$/,        
        loader: 'babel-loader',         
      },
      {
        test: /\.vue$/,
        loader:'vue-loader'
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,// 转base64
              name: '[name].[ext]',//ext 代表文件原本后缀
              outputPath: 'img/'//导出的位置
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