# example

## cyan-search-item

一个方便显示输入框，下拉选择器，单选器，多选器，外面有个 label 和 border 包裹的组件

<template>
  <cyan-search-item :inputValue.sync="inputTest"></cyan-search-item>
  <cyan-search-item searchType="select" :statusOpts="statusOpts" :selectValue.sync="selectValue"></cyan-search-item>
</template>

<script>
  export default {
  data(){
    return {
      inputTest:'test',
      selectValue: 'test',
      statusOpts: [{label:'test',value:'test'},{label:'label',value:'value'}]
    }
  }
}
  </script>

```html
<cyan-search-item :inputValue.sync="inputTest"></cyan-search-item>
<cyan-search-item
  searchType="select"
  :statusOpts="statusOpts"
  :selectValue.sync="selectValue"
></cyan-search-item>
```

[cyan-search-item 使用说明](../pages/components/platSearchItem.md)
