### 测试调试页面

> 2

<template>
    <!-- <cyan-button type="primary">Click me</cyan-button> -->
    <van-button>test van-button</van-button>
</template>

<template>
	<cyan-button type="primary">Click me</cyan-button>
  <el-button @click="test">测试element组件按需引入 and click</el-button>

<!-- <cyan-search-item></cyan-search-item> -->

<!-- <cyan-search-item searchType="select" :selectValue.sync="selectValue" :statusOpts="testData"></cyan-search-item> -->
<!-- <cyan-search-item searchType="select" :selectValue.sync="selectValue" :statusOpts="testData">
<el-select>
  <el-option></el-option>
</el-select>
</cyan-search-item> -->

<cyan-search-item searchType="input"></cyan-search-item>

<cyan-m-button-back @on-back="test"></cyan-m-button-back>
<cyan-m-search-bar :keyword.sync="content"></cyan-m-search-bar>
</template>

<script>
export default {
  data(){
    return {
      content:'test',
      selectValue: '',
      testData: [{label:'label1',value:"value1"}]
    }
  },
  mounted() {
    console.log('test')
    // this.$notice({
    //     title: '提示',
    //     content: this.content,
    //     duration: 3
    // })
  },
  methods: {
    test() {
      this.$notice({
        title:'测试点击toast',content: this.content,duration:5
      })
    }
  }
}
</script>
