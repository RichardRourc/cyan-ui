import '../../styles/search-item.scss'

import SearchItem from './search-item.vue'
;(SearchItem as any).install = function (Vue: any) {
  Vue.component(SearchItem.name, SearchItem)
}

export default SearchItem
