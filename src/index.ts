import Button from './packages/button'
import SearchItem from './packages/search-item'
import Notice from './packages/notice'

const components: any = {
  platButton: Button,
  platSearchItem: SearchItem,
}

const install = function(Vue: any, options = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  console.log(Notice, 'test Notice')
  Vue.prototype.$notice = Notice
}

export default install
