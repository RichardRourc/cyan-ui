import * as _vueIndex from 'vue'
import * as _vue from 'vue/types/vue'

declare global {
  // const Vue: _vueIndex.VueConstructor // related to vue.d.ts "export const Vue: VueConstructor;"

  namespace Vue {
    //type Vue = typeof _vueIndex.default; // For some reason this becomes VueConstructor interface instead of Vue interface
    type Vue = _vue.Vue
    // type CreateElement = _vueIndex.CreateElement
    type CombinedVueInstance<
      Instance extends Vue,
      Data,
      Methods,
      Computed,
      Props
    > = _vue.CombinedVueInstance<Instance, Data, Methods, Computed, Props>
    /*Other interfaces*/
  }
}
