// import webpack from '../../build/webpack.base'

module.exports = {
  plugins: ['vuepress-plugin-typescript'],
  title: 'Cyan UI',
  description: '平台组组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件开发说明', link: '/pages/dev' },
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
  }
}
