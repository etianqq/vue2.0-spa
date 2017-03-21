require('./check-versions')()

/*-----------------封装一个获取npm run参数的方法-----------------*/
function getEnv() {
  var argv = process.argv.slice(2);
  for (var i = 0; i < argv.length; i++) {
    if (argv[i].indexOf('--env=') >= 0) {
      return argv[i].substr(6);
    }
  }
}

/*-----------------根据获取到的参数，指定env.NODE_ENV的值-----------------*/
process.env.NODE_ENV = getEnv();

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
