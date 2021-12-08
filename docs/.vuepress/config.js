// import webpack from '../../build/webpack.base'

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
  }
}
