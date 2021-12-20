import '../../styles/m-search-bar.scss'

import MSearchBar from './m-search-bar.vue'
;(MSearchBar as any).install = function (Vue: any) {
  Vue.component(MSearchBar.name, MSearchBar)
}
export default MSearchBar
