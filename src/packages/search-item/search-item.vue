<template>
  <section
    class="plat-search-item"
    :style="
      `width: ${width}%; min-width: ${minWidth}px; max-width: ${maxWidth}px;`
    "
  >
    <div v-if="needLabel" class="item-label ">
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
      :style="
        `min-height: ${minHeightBorder}px;width:${(borderWidth &&
          borderWidth) ||
          'auto'};`
      "
    >
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script type="typescript">
import {
  Vue,
  Component,
  Watch,
  Prop,
  Emit,
  PropSync,
} from 'vue-property-decorator'

import { Input, Select, Checkbox, Radio } from 'element-ui'
import { useComponent } from '../../utils/component.js'

const components = [Input, Select, Checkbox, Radio]
useComponent(components, Vue)

@Component({
  name: 'SearchItem',
})
export default class SearchItem extends Vue {
  @Prop({ default: () => true }) needLabel
  @Prop({ default: () => false }) needBorder
  @Prop({ default: () => 0 }) minHeightBorder
  @Prop() borderWidth

  @Prop({ default: () => 'input' }) searchType
  @Prop({ default: () => 'label' }) label
  @PropSync('inputValue') inputValueCopy //传进来的值
  @Prop({ default: () => [] }) statusOpts // 选择器的选项数组
  @PropSync('selectValue') selectValueCopy // 选择器的值 默认只有简单值赋值之类的
  @Prop({ default: () => [] }) checkboxOpts // 多选择框的选项数组
  @PropSync('checkboxList') checkboxListCopy // 多选择框的值 默认只有简单值赋值之类的
  @Prop({ default: () => [] }) radioOpts // 单选框的选项数组
  @PropSync('radioValue') radioValueCopy // 单选框的值 默认只有简单值赋值之类的
  @Prop({ default: () => '' }) placeholder
  @Prop({ default: () => 'auto' }) width
  @Prop({ default: () => 'auto' }) minWidth // 最小宽度
  @Prop({ default: () => 'auto' }) maxWidth

  handleKeyup() {
    this.$emit('inputKeyup')
  }
}
</script>

<style lang="scss" scoped></style>
