<template>
  <div class="plat-notice">
    <div class="plat-notice__main" v-for="item in notices" :key="item.id">
      <div class="plat-notice__title">{{ item.title }}</div>
      <div class="plat-notice__content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlatNotice',
  data() {
    return {
      notices: []
    }
  },
  methods: {
    add(notice) {
      let id = +new Date()
      notice.id = id
      this.notices.push(notice)

      const duration = notice.duration
      setTimeout(() => {
        this.remove(id)
      }, duration * 1000)
    },
    remove(id) {
      for (let i = 0; i < this.notices.length; i++) {
        if (this.notices[i].id === id) {
          this.notices.splice(i, 1)
          break
        }
      }
    }
  }
}
</script>
