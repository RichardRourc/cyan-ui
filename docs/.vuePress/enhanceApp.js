import { Button } from 'vant'
// import { Button as EButton, Select } from 'element-ui'
// TODO 方便查看element组件库里组件在这个webpack应用里的展示。
// 在这个开发环境里引入组件库所有代码和样式文件
// babel还没有对这里进行处理
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import PlatformUI from '../../src/index'
import '../../src/styles/index.scss'

// import SearchItem from '../../src/packages/search-item/index'
// import '../../src/styles/common/var.scss'

// 样式在这里需要自己再引入
import 'vant/lib/button/style'
// import 'element-ui/lib/theme-chalk/button.css'

export default ({ Vue, options, router }) => {
  Vue.use(Button)
  // Vue.use(EButton)
  Vue.use(Element)
  Vue.use(PlatformUI)
}
