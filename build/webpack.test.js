const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  mode: 'development',
  // entry: {
  //   app: ['./src/index.js'],
  // },
  // output: {
  //   path: path.resolve(process.cwd(), './dist'),
  //   publicPath: '/dist/',
  //   filename: '[name].js',
  //   chunkFilename: '[id].js',
  // },
  resolve: {
    // extensions: ['.js', '.vue', '.json'],
    extensions: ['.ts', '.vue', '.json', '.js'],
    alias: Object.assign({
      main: path.resolve(__dirname, '../src'),
      packages: path.resolve(__dirname, '../src/packages'),
      // examples: path.resolve(__dirname, '../examples'),
      // 'element-ui': path.resolve(__dirname, '../'),}, {
      vue$: 'vue/dist/vue.common.js',
      '@': resolve('src')
    }),
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        // exclude: config.jsexclude,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
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
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /.scss$/,
        use: [
          'style-loader',
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
                    // 如果不是cyan-m开头的css文件都不转换
                    selectorBlackList: [/^\.(?!cyan-m)\S*/]
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
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}

if (!process.env.CI_ENV) {
  webpackConfig.plugins.push(new ProgressBarPlugin())
}

module.exports = webpackConfig
