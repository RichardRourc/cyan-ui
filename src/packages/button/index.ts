import '../../styles/button.scss'

import Button from './button.vue'
;(Button as any).install = function (Vue: any) {
  Vue.component(Button.name, Button)
}
export default Button
