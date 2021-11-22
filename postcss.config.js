const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 10 versions', 'android >= 4.0']
    }),
    pxtorem({
      rootValue({ file }) {
        let remUnit
        if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
          remUnit = 50
        } else {
          remUnit = 100
        }
        return remUnit
      },
      propList: ['*'],
      selectorBlackList: []
    })
  ]
}
