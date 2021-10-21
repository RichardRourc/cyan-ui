test test one two three

> 2

<template>
    <plat-button type="primary">Click me</plat-button>
    <van-button>test van-button</van-button>
</template>

<template>
	<plat-button type="primary">Click me</plat-button>
  <el-button @click="test">测试element组件按需引入 and click</el-button>
</template>

<script>
export default {
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
    test() {this.$notice({title:'测试点击toast',content: this.content,duration:5})}
  }
}
</script>
