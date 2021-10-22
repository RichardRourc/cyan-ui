import { Button } from 'vant'
import { Button as EButton, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import PlatformUI from '../../src/index.js'
import '../../src/styles/index.scss'

import SearchItem from '../../src/packages/SearchItem/index'
import '../../src/styles/common/var.scss'

// 样式在这里需要自己再引入
import 'vant/lib/button/style'
import 'element-ui/lib/theme-chalk/button.css'

export default ({ Vue, options, router }) => {
  Vue.use(Button)
  Vue.use(EButton)
  Vue.use(PlatformUI)
}
