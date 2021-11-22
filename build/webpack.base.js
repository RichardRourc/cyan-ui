/* webpack.base.js */
const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  module: {
    rules: [
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
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass')
            }
          }
        ]
      },

      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          { loader: 'posscss-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass')
            }
          }
        ]
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
    new VueLoaderPlugin()
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
