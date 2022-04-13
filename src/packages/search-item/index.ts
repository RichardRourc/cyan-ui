import '../../styles/search-item.scss'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/checkbox.css'
import 'element-ui/lib/theme-chalk/radio.css'

import SearchItem from './search-item.vue'
import { getCompName } from '../../utils/component'
;(SearchItem as any).install = function (Vue: any) {
  Vue.component(getCompName(SearchItem), SearchItem)
}

export default SearchItem
