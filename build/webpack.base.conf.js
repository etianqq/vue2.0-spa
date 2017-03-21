var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var apis_url = path.join(__dirname, '../src/service/config/apiconfig.js')
/*-----------------根据process变量找到对应的webconfig文件-----------------*/
var host_url="";
switch (process.env.NODE_ENV) {
  case 'test' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_test.js'); // 这里用双斜线，很重要！
    break;
  case 'release' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_release.js');
    break;
  case 'integrate' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_integrate.js');
    break;
  case 'beta' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_beta.js');
    break;
  case 'demo' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_demo.js');
    break;
  case 'dev' :
    host_url = path.join(__dirname, '../src/service/config/webconfig_develop.js');
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
  }
}
