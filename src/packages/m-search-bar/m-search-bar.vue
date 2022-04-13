<template>
  <div
    class="cyan-m-search-bar"
    :class="{ 'cyan-m-search-bar__clicked': isSearchClick || keywordCopy }"
    @click="handleSearchClick"
  >
    <div
      class="search-bar-wrap"
      :class="{ 'search-bar-wrap__clicked': isSearchClick || keywordCopy }"
    >
      <img
        src="../../assets/icon_search.png"
        alt=""
        class="icon-search pointer"
        @click.stop="search"
      />
      <!-- 如果没有点击，且没有关键词              -->
      <template v-if="!isSearchClick && !keywordCopy">
        <div class="search-placeholder">输入关键词进行搜索</div>
      </template>
      <template v-if="isSearchClick || keywordCopy">
        <input
          ref="searchInput"
          class="search-input"
          type="text"
          v-model="keywordCopy"
          @blur="handleSearchBlur"
          @keyup.enter="search"
        />
        <!-- 重置图标 -->
        <img
          v-if="showIcon"
          @click.stop="handleResetClick"
          src="../../assets/icon_reset.png"
          alt=""
          class="icon-reset pointer"
        />
        <div class="icon-reset" v-else></div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, PropSync } from 'vue-property-decorator'

@Component({
  name: 'CyanMSearchBar'
})
export default class CyanMSearchBar extends Vue {
  @PropSync('keyword', { required: true }) keywordCopy!: string //传进来的 值

  isSearchClick = false
  // 搜索框
  keyword = ''
  iconTimer: any
  showIcon = false

  /**
   * 点击搜索框
   */
  handleSearchClick() {
    this.isSearchClick = true
    this.$nextTick(() => {
      ;(this.$refs['searchInput'] as any).focus()
    })
  }

  /**
   * 搜索框失焦
   */
  handleSearchBlur() {
    this.isSearchClick = false
  }

  handleResetClick() {
    this.keyword = ''
    this.isSearchClick = false
  }

  search() {
    this.$emit('on-search')
  }

  @Watch('isSearchClick')
  changeSuffix(val: any) {
    if (this.iconTimer) {
      clearTimeout(this.iconTimer)
    }
    if (val === false) {
      this.iconTimer = setTimeout(() => {
        this.showIcon = false
      }, 150)
    }
    if (val) {
      this.showIcon = true
    }
  }
}
</script>
