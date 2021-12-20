import '../../styles/m-button-back.scss'

import ButtonBack from './m-button-back.vue'
;(ButtonBack as any).install = function (Vue: any) {
  Vue.component(ButtonBack.name, ButtonBack)
}
export default ButtonBack
