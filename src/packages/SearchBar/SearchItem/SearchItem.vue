<template>
  <section
    class="search-item"
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
        <template slot="prepend" v-if="label !== ''">
          <span>{{ label }}</span>
        </template>
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

<script>
import {
  Vue,
  Component,
  Watch,
  Prop,
  Emit,
  PropSync,
} from 'vue-property-decorator'

@Component({
  components: {},
})
export default class SearchItem extends Vue {
  @Prop({ default: () => true }) needLabel
  @Prop({ default: () => false }) needBorder
  @Prop({ default: () => 0 }) minHeightBorder
  @Prop() borderWidth

  @Prop({ default: () => 'input' }) searchType
  @Prop({ default: () => 'label', required: true }) label
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

<style lang="scss" scoped>
.search-item {
  display: flex;
  align-items: space-between;
  margin-bottom: 8px;
  padding-right: 16px;
  height: 100%;
  font-size: 13px;

  .item-label {
    opacity: 0.9;
    height: 95%;
    padding: 0 20px;
    margin-right: -3px;
    line-height: 30px;
    font-size: 13px;
    border-right: 0;
    color: #fff;
    vertical-align: middle;
    background-color: #409eff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-weight: bold;
    white-space: nowrap;
  }

  ::v-deep .el-select .el-input__inner {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .el-select {
    width: 100%;
  }

  @mixin labelStyle($bgcolor: $BaseColor_blue) {
    background-color: $bgcolor;
    color: white;
    font-weight: bold;
    opacity: 0.9;
  }
  .el-input,
  .el-autocomplete {
    ::v-deep .el-input-group__prepend,
    ::v-deep .el-input-group__append {
      @include labelStyle();
    }
  }

  ::v-deep .el-input-group__prepend {
    font-size: 13px;
  }

  .search-border {
    display: flex;
    align-items: center;
    padding: 0 15px;
    min-height: 30px;
    background-color: transparent;
    border: 1px solid #dcdfe6;
    border-radius: 4px;

    .search-radio,
    .search-checkbox {
      ::v-deep .el-checkbox-group,
      ::v-deep .el-checkbox,
      ::v-deep .el-radio-group,
      ::v-deep .el-radio {
        height: 30px;
        line-height: 30px;
      }
    }

    &:hover {
      border-color: #c0c4cc;
    }
  }

  ::v-deep .el-date-editor--daterange {
    width: 260px;
  }
}
</style>
