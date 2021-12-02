/* webpack.base.js */
const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

const postcssConfig = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 10 versions', 'android >= 4.0']
    })
    // pxtorem({
    //   rootValue({ file }) {
    //     // console.log(file, 'file-----')
    //     let remUnit
    //     if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    //       remUnit = 50
    //     } else {
    //       remUnit = 100
    //     }

    //     return remUnit
    //   },
    //   propList: ['*'],
    //   selectorBlackList: [],
    //   exclude: /node_modules/i
    // })
  ]
}

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: postcssConfig
          }
        ]
      },

      {
        test: /.scss$/,

        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ['last 10 versions', 'android >= 4.0']
                  }),
                  pxtorem({
                    rootValue({ file }) {
                      let remUnit
                      if (
                        file &&
                        file.dirname &&
                        file.dirname.indexOf('vant') > -1
                      ) {
                        remUnit = 50
                      } else {
                        remUnit = 100
                      }

                      return remUnit
                    },
                    propList: ['*'],
                    // 如果不是plat-m开头的css文件都不转换
                    selectorBlackList: [/^\.(?!plat-m)\S*/]
                  })
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') }
          }
        ]
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader',
            tsx: 'babel-loader!ts-loader',
            css: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          postLoaders: {
            html: 'babel-loader?sourceMap'
          },
          sourceMap: true
        }
      },
      {
        test: /.tsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/.vue$/]
          }
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
          presets: ['@babel/preset-env']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.json', '.ts', '.js'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ]
  // alias: {
  //   main: path.resolve(__dirname, '../src'),
  //   packages: path.resolve(__dirname, '../src/packages'),
  //   // examples: path.resolve(__dirname, '../examples'),
  //   // 'element-ui': path.resolve(__dirname, '../'),
  // },
  // jsexclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
}

// exports.alias = {
//   main: path.resolve(__dirname, '../src'),
//   packages: path.resolve(__dirname, '../packages'),
//   examples: path.resolve(__dirname, '../examples'),
//   'element-ui': path.resolve(__dirname, '../'),
// }
