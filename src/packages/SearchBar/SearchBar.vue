<template>
  <section class="search-bar">
    <slot>左边内容</slot>
    <el-button
      class="button-search"
      type="plain"
      size="mini"
      @click="handleSearch"
    >
      searching
    </el-button>
  </section>
</template>

<script>
import { Vue, Component, Watch, Prop, Emit } from "vue-property-decorator"
import { State, Getter, Action, Mutation, namespace } from "vuex-class"

@Component({
  components: {}
})
export default class SearchBar extends Vue {
  handleSearch() {
    this.$emit("handleSearch")
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  font-size: 13px;
  // border: 1px solid $BaseColor_navy;

  .button-search {
    border-radius: 6px;
  }

  & ::v-deep .el-select {
    font-size: 13px;
  }
}
</style>
