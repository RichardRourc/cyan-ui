<template>
  <section
    class="plat-mb-button-back"
    :class="{ 'button-back--fixed': isDown }"
  >
    <div
      class="button-back-content"
      :class="{ 'button-back-content--fixed': isDown }"
    >
      <img :src="backIcon" alt="" class="icon-back pointer" @click="backTo" />
      <div class="button-name">{{ buttonName }}</div>
    </div>
    <van-button class="test"></van-button>
  </section>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { throttle } from '../../utils/index'
import { Button } from 'vant'

const backIcon = require('../../assets/icon_back.png')
Vue.use(Button)

@Component({
  name: 'platMbButtonBack'
})
export default class ButtonBack extends Vue {
  @Prop({ default: () => '结算明细' }) buttonName!: string
  // @Prop({ default: () => false }) routeObj
  @Prop({
    default: () => {
      return function () {
        return true
      }
    }
  })
  onBack!: () => any // 如果返回true才返回上一页
  isDown = false
  lastScroll = 0
  throttle: any

  backIcon = backIcon

  path: any = '' /**
          存储当前页面路径，
          只有一样才出发监听浏览器的返回，
          不然和axios的返回会冲突
        */

  created() {
    // this.path = this.$route.path
    this.throttle = throttle(this, this.watchScroll, 100)
    window.addEventListener('scroll', this.throttle, false)
    // TODO 监听浏览器返回按钮似乎没生效
    window.addEventListener('popstate', this.backTo, false)
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.throttle, false)
    window.removeEventListener('popstate', this.backTo, false)
  }

  watchScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    const scroll = scrollTop - this.lastScroll
    this.lastScroll = scrollTop
    // if (scroll < 0) {
    //   // console.log("up")
    //   this.isDown = false
    // } else {
    //   // console.log("down")
    //   this.isDown = true
    // }
    if (scroll > 0) {
      this.isDown = true
    }
    if (document.documentElement.scrollTop === 0) {
      this.isDown = false
    }
  }

  async backTo() {
    try {
      // 在token失效拦截返回时由于会修改路由，可能导致路由混乱跳转错误问题
      // if (this.$route.path === this.path) {
      if (await this.onBack()) {
        console.log('test back to')
        this.$emit('on-back')
        // if (this.routeObj) {
        //   this.$router.push(this.routeObj)
        // } else {
        if (
          window.history &&
          window.history.length &&
          window.history.length === 2
        ) {
          // this.$router.push({ path: '/' })
        } else {
          // this.$router.go(-1)
        }
      }
      // this.$router.push({ path: "/" })

      // 等于2是只复制了这个页面过来，先直接返回首页

      this.$destroy()
      // } else {
      //   console.log('return false')
      // }
      // } else {
      //   return false
      // }
    } catch (e) {
      console.log(e, 'e')
    }
  }
}
</script>
