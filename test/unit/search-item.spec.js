import { mount } from '@vue/test-utils'
import SearchItem from '@/packages/search-item/index.js'

describe('search-item.vue', () => {
  it('renders a search-item', () => {
    const wrapper = mount(SearchItem)

    console.log(wrapper.html())
  })
})
