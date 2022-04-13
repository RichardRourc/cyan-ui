/*  webpack.prod.js */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    'cyan-ui': path.resolve(__dirname, '../src/index') // 将src下的index.js 作为入口点
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: 'cyan-ui.min.js', // 改成自己的类库名
    library: 'cyan-ui', // 类库导出
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    // 外部化对vue的依赖
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // 不使用gulp后webpack单独打包css并且配置css文件名字
    new MiniCssExtractPlugin({
      filename: 'styles/cyan-ui.css'
    }),
    (process.env['analyze'] &&
      process.env['analyze'] === 'true' &&
      new BundleAnalyzerPlugin()) ||
      function () {
        return undefined
      }
  ]
})
