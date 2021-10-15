import { Button } from 'vant'

import PlatformUI from '../../src/index.js'
import '../../src/styles/index.scss'

export default ({ Vue, options, router }) => {
  Vue.use(Button)
  Vue.use(PlatformUI)
}
