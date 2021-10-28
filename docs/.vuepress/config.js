module.exports = {
  title: 'Platform UI',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '样例', link: '/' },
      { text: 'test', link: '/pages' },
    ],
    sidebar: {
      '/': 'auto',
      '/pages/': [
        {
          text: '本地测试',
          children: ['/pages/test.md'],
        },
      ],
    },
  },
}
