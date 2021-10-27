import Button from './packages/button'
import SearchItem from './packages/search-item'
import Notice from './packages/notice/notice.js'

import { registComponent } from './utils/component'

const components = {
  platButton: Button,
  platSearchItem: SearchItem,
}

console.log(SearchItem, 'plat')
const install = function(Vue, options = {}) {
  Object.keys(components).forEach(key => {
    console.log(key, 'key', components[key])
    Vue.component(key, components[key])
  })

  Vue.prototype.$notice = Notice
}

export default install
