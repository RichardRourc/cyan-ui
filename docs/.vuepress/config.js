// import webpack from '../../build/webpack.base'

const config = require('../../build/webpack.base')
const webpack = require('webpack')
const pkg = require('../../package.json')

const path = require('path')
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
    // module: {
    //   rules: [
    //     {
    //       test: /\.tsx?$/,
    //       exclude: [/node_modules/],
    //       use: {
    //         loader: 'ts-loader',
    //         options: {
    //           appendTsSuffixTo: [/\.vue$/],
    //         },
    //       },
    //     },
    //     // {
    //     //   test: /\.vue$/,
    //     //   use: {
    //     //     loader: 'vue-loader',
    //     //     options: {
    //     //       loaders: {
    //     //         // ts: 'ts-loader',
    //     //         // tsx: 'babel-loader!ts-loader',
    //     //         css: [
    //     //           'vue-style-loader',
    //     //           {
    //     //             loader: 'css-loader',
    //     //             options: {
    //     //               sourceMap: true,
    //     //             },
    //     //           },
    //     //         ],
    //     //         less: [
    //     //           'vue-style-loader',
    //     //           {
    //     //             loader: 'css-loader',
    //     //             options: {
    //     //               sourceMap: true,
    //     //             },
    //     //           },
    //     //           {
    //     //             loader: 'less-loader',
    //     //             options: {
    //     //               sourceMap: true,
    //     //             },
    //     //           },
    //     //         ],
    //     //       },
    //     //       postLoaders: {
    //     //         html: 'babel-loader?sourceMap',
    //     //       },
    //     //       sourceMap: true,
    //     //     },
    //     //   },
    //     // },
    //     {
    //       test: /\.js$/,
    //       loader: 'babel-loader',
    //       options: {
    //         sourceMap: true,
    //       },
    //       exclude: /node_modules/,
    //     },
    //   ],
    // },
    module: {
      rules: [
        // {
        //   test: /\.(js|jsx?|babel|es6)$/,
        //   include: process.cwd(),
        //   exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        //   // exclude: config.jsexclude,
        //   loader: 'babel-loader',
        //   options: { presets: ['@babel/preset-env'] },
        // },
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        //   options: {
        //     compilerOptions: {
        //       preserveWhitespace: false,
        //     },
        //   },
        // },
        // {
        //   test: /\.vue$/,
        //   use: {
        //     loader: 'vue-loader',
        //   },
        // },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
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
        {
          test: /.tsx?$/,
          exclude: [/node_modules/],
          use: {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/.vue$/],
            },
          },
        },

        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            sourceMap: true,
            presets: ['@babel/preset-env'],
            // plugins: [
            //   'transform-decorators-legacy',
            //   'transform-class-properties',
            // ],
          },
          exclude: /node_modules/,
        },
        // {
        //   test: /\.css$/,
        //   loaders: ['style-loader', 'css-loader'],
        // },

        // {
        //   test: /\.css$/,
        //   loaders: [
        //     {
        //       loader: 'style-loader',
        //     },
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         sourceMap: true,
        //       },
        //     },
        //   ],
        // },
        // {
        //   test: /\.less$/,
        //   loaders: [
        //     {
        //       loader: 'style-loader',
        //     },
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         sourceMap: true,
        //       },
        //     },
        //     {
        //       loader: 'less-loader',
        //       options: {
        //         sourceMap: true,
        //       },
        //     },
        //   ],
        // },
        // {
        //   test: /\.scss$/,
        //   loaders: [
        //     {
        //       loader: 'style-loader',
        //     },
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         // sourceMap: true,
        //       },
        //     },
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         implementation: require('sass'),
        //       },
        //     },
        //   ],
        // },
        // {
        //   test: /\.sass$/,
        //   use: [
        //     'vue-style-loader',
        //     'css-loader',
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         indentedSyntax: true,
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: path.posix.join('static', '[name].[hash:7].[ext]'),
          },
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
