test test one two three

> 2

<template>
    <plat-button type="primary">Click me</plat-button>
    <van-button>test</van-button>
</template>

<template>
	<plat-button type="primary">Click me</plat-button>
  
</template>

<script>
export default() {
  data(){
    return {
      content:'test'
    }
  },
  mounted() {
    console.log('test')
    this.$notice({
        title: '提示',
        content: this.content,
        duration: 3
    })
  },
  methods: {
    test() {
      this.$notice({
          title: '提示',
          content: this.content,
          duration: 3
      })
    }
  }
}
<script>
