import '@/styles/notice.scss'

import Vue from 'vue'
import Notice from './notice.vue'
;(Notice as any).newInstance = (properties: any) => {
  const props = properties || {}
  const Instance = new Vue({
    render(h) {
      return h(Notice, {
        props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  const notice: any = component.$children[0]

  return {
    add(_notice: any) {
      notice.add(_notice)
    }
  }
}

let noticeInstance: any

export default (_notice: any) => {
  noticeInstance = noticeInstance || (Notice as any).newInstance()
  noticeInstance.add(_notice)
}
