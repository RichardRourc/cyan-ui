// import webpack from '../../build/webpack.base'
const config = require('../../build/webpack.base')
const webpack = require('webpack')
const pkg = require('../../package.json')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          use: {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        },
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader',
            options: {
              loaders: {
                // ts: 'ts-loader',
                // tsx: 'babel-loader!ts-loader',
                css: [
                  'vue-style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
                less: [
                  'vue-style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
              },
              postLoaders: {
                html: 'babel-loader?sourceMap',
              },
              sourceMap: true,
            },
          },
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            sourceMap: true,
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env.VERSION': `'${pkg.version}'`,
      }),
      new VueLoaderPlugin(),
    ],
  },
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.vue$/,
  //         use: {
  //           loader: 'vue-loader',
  //           options: {
  //             loaders: {
  //               ts: 'ts-loader',
  //               tsx: 'babel-loader!ts-loader',
  //               css: [
  //                 'vue-style-loader',
  //                 {
  //                   loader: 'css-loader',
  //                   options: {
  //                     sourceMap: true,
  //                   },
  //                 },
  //               ],
  //               less: [
  //                 'vue-style-loader',
  //                 {
  //                   loader: 'css-loader',
  //                   options: {
  //                     sourceMap: true,
  //                   },
  //                 },
  //                 {
  //                   loader: 'less-loader',
  //                   options: {
  //                     sourceMap: true,
  //                   },
  //                 },
  //               ],
  //             },
  //             postLoaders: {
  //               html: 'babel-loader?sourceMap',
  //             },
  //             sourceMap: true,
  //           },
  //         },
  //       },
  //       // ts
  //       {
  //         test: /\.tsx$/,
  //         loader: 'ts-loader',
  //         options: { appendTsSuffixTo: [/\.vue$/] },
  //       },
  //       {
  //         test: /\.js$/,
  //         loader: 'babel-loader',
  //         options: {
  //           sourceMap: true,
  //         },
  //         exclude: /node_modules/,
  //       },
  //       {
  //         test: /\.scss$/,
  //         loaders: [
  //           {
  //             loader: 'style-loader',
  //           },
  //           {
  //             loader: 'css-loader',
  //             options: {
  //               sourceMap: true,
  //             },
  //           },
  //           {
  //             loader: 'sass-loader',
  //             options: {
  //               sourceMap: true,
  //               implementation: require('sass'),
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
  //         loader: 'url-loader?limit=8192',
  //       },
  //     ],
  //   },
  // },
}
