// Karma configuration
// Generated on Mon Nov 01 2021 11:32:55 GMT+0800 (中国标准时间)
const webpackConfig = require('./build/webpack.test')

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['mocha', 'webpack', 'chai'],

    // list of files / patterns to load in the browser
    files: ['test/**/*.js'],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      // 匹配测试文件，并使用 webpack 进行预处理
      'test/**/*.js': ['webpack', 'coverage'],
    },

    // test results reporter tkarma-webpacko use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    // reporters: ['progress'],
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      // 生成报告的目录
      dir: 'coverage/',
      // 要生成的报告类型
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ],
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
    webpack: webpackConfig,
    // plugins: ['karma-webpack', 'karma-mocha'],
  })
}
