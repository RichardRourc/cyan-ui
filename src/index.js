import Button from './packages/button'
import SearchItem from './packages/search-item'
import Notice from './packages/notice/notice.js'

const components = {
  platButton: Button,
  platSearchItem: SearchItem,
}

const install = function(Vue, options = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  Vue.prototype.$notice = Notice
}

export default install
