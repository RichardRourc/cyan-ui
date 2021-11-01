import { mount, shallowMount } from '@vue/test-utils'
import SearchItem from '../../src/packages/search-item/index.js'

describe('search-item.vue', () => {
  it(
    'renders a search-item',
    () => {
      const wrapper = mount(SearchItem)

      console.log(wrapper.html())
    },
    it('test radip type', () => {
      const searchType = 'select'
      let selectValue = ''

      const wrapper = shallowMount(SearchItem, {
        propsData: { searchType, selectValue },
      })
      console.log(wrapper, 'wrapper')

      expect(document.querySelector())
    })
  )
})
