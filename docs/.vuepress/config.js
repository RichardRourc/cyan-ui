// import webpack from '../../build/webpack.base'

const config = require('../../build/webpack.base')
const webpack = require('webpack')
const pkg = require('../../package.json')

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const postcssConfig = require('../../postcss.config')

module.exports = {
  plugins: ['vuepress-plugin-typescript'],
  title: 'Platform UI',
  description: '一个组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/guide/' },
      { text: 'test', link: '/pages/test.md' }
    ],
    sidebar: {
      '/': 'auto',
      '/pages/': [
        {
          text: '本地测试',
          children: ['/pages/test.md']
        }
      ]
    }
  },
  postcss: postcssConfig,
  chainWebpack: (config) => {
    // console.log(config.module.rules.store, 'config')
  }
}
