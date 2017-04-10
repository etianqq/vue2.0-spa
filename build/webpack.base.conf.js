var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')
var apis_url = path.join(__dirname, '../src/service/config/apiconfig.js')
/*-----------------根据process变量找到对应的webconfig文件-----------------*/
var host_url="";
switch (process.env.NODE_ENV) {
  case 'test' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_test.js');
    break;
  case 'release' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_release.js');
    break;
}

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'HOST': host_url,
      'APIS': apis_url
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    //定义全局插件，不需要引入，直接可以使用模块名，如：$z.xxx();
    new webpack.ProvidePlugin({
      HOST: 'HOST',
      APIS: "APIS",
    })
  ]
}
