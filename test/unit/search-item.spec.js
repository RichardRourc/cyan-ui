import { mount, shallowMount } from '@vue/test-utils'
import SearchItem from '../../src/packages/search-item/index.js'
import { createElm, createVue, triggerEvent } from '../utils/util'

describe('search-item.vue', () => {
  it(
    'renders a search-item',
    () => {
      const wrapper = mount(SearchItem)
      // expect(wrapper.html())
      expect(wrapper.find('.plat-search-item').isVisible()).to.true
    },
    it('select value correctly', async () => {
      const searchType = 'select'
      let selectValue = '',
        statusOpts = [
          { label: 'label', value: 'value' },
          { label: 'label1', value: 'value1' },
        ]

      let vm
      vm = createVue(
        {
          template: `<div>
                      <plat-search-item
                        :selectValue.sync="selectValue"
                        searchType="searchType"
                        :statusOpts="statusOpts">
                      </plat-search-item>
                    </div>`,
          data() {
            return {
              selectValue,
              searchType,
              statusOpts,
            }
          },
        },
        true
      )
      const options = vm.$el.querySelectorAll('.el-select-dropdown__item')
      expect(vm.selectValue).to.equal('')

      triggerEvent(options[0], 'mouseenter')
      options[0].click()
      setTimeout(async () => {
        expect(vm.selectValue).to.equal('value')

        triggerEvent(options[1], 'mouseenter')
        await options[1].click()

        // 这里的setTimeout 好像并没有等待vue数据更新
        // setTimeout(() => {
        expect(vm.selectValue).to.equal('value1')
        // }, 100)
      }, 100)
    })
  )
})
