<template>
  <section
    class="plat-search-item"
    :style="`width: ${width}%; min-width: ${minWidth}px; max-width: ${maxWidth}px;`"
  >
    <div v-if="needLabel" class="item-label">
      <label for="label-item">{{ label }}</label>
    </div>
    <slot>
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
      <!-- 下拉选择器默认插槽 -->
      <el-select
        v-if="statusOpts.length || searchType === 'select'"
        name="label-item"
        v-model="selectValueCopy"
      >
        <el-option
          v-for="(item, key) in statusOpts"
          :key="key"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <!-- 多选框类型默认插槽 -->
      <div class="search-border" v-if="searchType === 'checkbox'">
        <el-checkbox-group
          v-model="checkboxListCopy"
          class="search-checkbox"
          v-on="$listeners"
        >
          <el-checkbox
            v-for="(item, key) in checkboxOpts"
            :key="key"
            :label="item"
          ></el-checkbox>
        </el-checkbox-group>
      </div>
      <!-- 单选框类型默认插槽 -->
      <div class="search-border" v-if="searchType === 'radio'">
        <el-radio-group
          v-model="radioValueCopy"
          class="search-radio"
          v-on="$listeners"
        >
          <el-radio
            v-for="(item, key) in radioOpts"
            :key="key"
            v-bind="item"
          ></el-radio>
        </el-radio-group>
      </div>
    </slot>
    <div
      class="search-border"
      v-if="needBorder"
      :style="`min-height: ${minHeightBorder}px;width:${
        (borderWidth && borderWidth) || 'auto'
      };`"
    >
      <slot name="content"></slot>
    </div>
  </section>
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

import { Input, Select, Checkbox, Radio, Option } from 'element-ui'
import { useComponent } from '../../utils/component'

const components = [Input, Select, Checkbox, Radio, Option]
useComponent(components, Vue)

@Component({
  name: 'PlatSearchItem'
})
// 输入框，单选，多选，下拉选择器的方便显示和使用
export default class PlatSearchItem extends Vue {
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

  handleKeyup() {
    this.$emit('inputKeyup')
  }
}
</script>

<style lang="scss" scoped></style>
