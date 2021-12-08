<template>
  <button
    class="plat-button"
    :class="{ [`plat-button-${type}`]: true }"
    type="button"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PlatButton',
  props: {
    type: {
      validator(value) {
        return [
          'default',
          'primary',
          'info',
          'success',
          'warning',
          'error'
        ].includes(value)
      },
      type: String,
      default: 'default'
    }
  },
  mounted() {
    const btn = this.$el

    btn.onclick = (event) => {
      // 创建波纹小球dom
      const rippleBall = document.createElement('span')

      // 获取波纹小球dom初始位置
      const x = event.clientX - btn.getBoundingClientRect().x - 10
      const y = event.clientY - btn.getBoundingClientRect().y - 10

      // 波纹小球样式设置
      rippleBall.style.left = x + 'px'
      rippleBall.style.top = y + 'px'
      rippleBall.classList.add('ripple-ball')

      // 波纹小球挂载
      btn.appendChild(rippleBall)

      // 监听动画结束事件,以移除小球
      rippleBall.addEventListener('animationend', () => {
        btn.removeChild(rippleBall)
      })
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
