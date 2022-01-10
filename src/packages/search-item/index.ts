import '../../styles/search-item.scss'

import SearchItem from './search-item.vue'
import { getCompName } from '../../utils/component'
;(SearchItem as any).install = function (Vue: any) {
  Vue.component(getCompName(SearchItem), SearchItem)
}

export default SearchItem
