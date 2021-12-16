<template>
  <plat-search-item-wrap>
    <!-- 输入框默认插槽 -->
    <el-input
      v-model="inputValueCopy"
      name="label-item"
      size="small"
      :placeholder="placeholder"
      v-if="searchType === 'input'"
      @keyup.enter.native="handleKeyup"
    >
      <!-- <template slot="prepend" v-if="label">
          <span>{{ label }}</span>
        </template> -->
    </el-input>
  </plat-search-item-wrap>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Watch,
  Prop,
  Emit,
  PropSync
} from 'vue-property-decorator'

import wrap from './wrap.vue'

import { Input } from 'element-ui'
import { useComponent } from '../../../utils/component'

@Component({
  name: 'PlatSearchItemInput',
  components: { 'plat-search-item-wrap': wrap }
})
// 输入框，单选，多选，下拉选择器的方便显示和使用
export default class PlatSearchItemInput extends Vue {
  @Prop({ default: () => true, type: Boolean }) needLabel!: boolean
  @Prop({ default: () => false }) needBorder!: boolean
  @Prop({ default: () => 0 }) minHeightBorder!: number
  @Prop() borderWidth!: string | number

  @Prop({ default: () => 'input' }) searchType!: string
  @Prop({ default: () => 'label' }) label!: string
  @PropSync('inputValue') inputValueCopy!: string //传进来的 值
  @Prop({ default: () => [] }) statusOpts!: [any] // 选择器的选项数组
  @PropSync('selectValue') selectValueCopy!: string // 选择器的值 默认只有简单值赋值之类的
  @Prop({ default: () => [] }) checkboxOpts!: [any] // 多选择框的选项数组
  @PropSync('checkboxList') checkboxListCopy!: string // 多选择框的值 默认只有简单值赋值之类的
  @Prop({ default: () => [] }) radioOpts!: [any] // 单选框的选项数组
  @PropSync('radioValue') radioValueCopy!: string // 单选框的值 默认只有简单值赋值之类的
  @Prop({ default: () => '' }) placeholder!: string
  @Prop({ default: () => 'auto' }) width!: string | number
  @Prop({ default: () => 'auto' }) minWidth!: string | number // 最小宽度
  @Prop({ default: () => 'auto' }) maxWidth!: string | number

  test: any = ''

  created() {
    // if()
    console.log(this.$props, 'prop')
    const { searchType } = this.$props,
      componentConf: any = {
        input: [Input]
      }
    // let arrComponents = componentConf[searchType]
    let arrComponents = [Input]

    console.log(arrComponents, 'arrCom')
    useComponent(arrComponents, Vue)
  }

  handleKeyup() {
    this.$emit('inputKeyup')
  }

  data() {
    return {
      name: 'test'
    }
  }
}
</script>
