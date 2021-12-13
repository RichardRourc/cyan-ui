<template>
  <div class="plat-m-search-bar">
    <div class="plat-m-search-bar padding-40">
      <div
        class="search-bar"
        :class="{ 'search-bar__clicked': isSearchClick || keyword }"
        @click="handleSearchClick"
      >
        <img
          src="../../assets/icon_search.png"
          alt=""
          class="icon-search pointer"
          @click.stop="refresh"
        />
        <!-- 如果没有点击，且没有关键词              -->
        <template v-if="!isSearchClick && !keyword">
          <div class="search-placeholder">输入关键词进行搜索</div>
        </template>
        <template v-if="isSearchClick || keyword">
          <input
            ref="searchInput"
            class="search-input"
            type="text"
            v-model="keyword"
            @blur="handleSearchBlur"
            @keyup.enter="refresh"
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'PlatMSearchBar'
})
export default class PlatMSearchBar extends Vue {
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
