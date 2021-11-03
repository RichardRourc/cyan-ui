import { mount, shallowMount } from '@vue/test-utils'
import SearchItem from '../../src/packages/search-item/index.js'

import { Select, Option, Input } from 'element-ui'
import Vue from 'vue'

describe('search-item.vue', () => {
  it(
    'renders a search-item',
    () => {
      // const wrapper = mount(SearchItem)
      // console.log(wrapper.html())
    },
    it('test select type', async () => {
      const searchType = 'select'
      let selectValue = '',
        statusOpts = [
          { label: 'label', value: 'value' },
          { label: 'label1', value: 'value1' },
        ]

      const wrapper = shallowMount(SearchItem, {
          propsData: { searchType, selectValue, statusOpts },
          stubs: {
            'el-input': Input,

            'el-select': Select,
            'el-option': Option,
          },
        }),
        vm = wrapper.vm

      console.log(
        wrapper
          .find('.el-select')

          .classes(),
        // wrapper.find('.el-option').classes(),
        'test'
      )
      // await wrapper
      //   .findAll('.el-select')
      //   .at(0)
      //   .trigger('change')

      // await wrapper
      //   .find('.el-select-dropdown__item')

      //   .trigger('click')

      // await wrapper
      //   .findAll('.el-select')
      //   .at(0)
      //   .trigger('change')

      console.log(
        wrapper
          .findAll('.el-select-dropdown__item')
          .at(0)
          .classes(),
        'test options'
      )
      // await vm.$nextTick()
      // const options = wrapper
      //   .find('.el-select-dropdown__list')
      //   .findAll('el-s elect-dropdown__items')
      // console.log(options, 'options')
      // options.at(0).setSelected()
      // wrapper.vm.select(statusOpts)

      // wrapper.findAll('.el-select-dropdown__item').at(0).element.selected = true
      // wrapper.find('.el-select').trigger('change')

      // const reco = wrapper.findComponent(Select)
      // reco.vm.$emit('change')

      wrapper
        .findAll('.el-select-dropdown__item')
        .at(0)
        .trigger('click')
      await Vue.nextTick()
      console.log(vm.selectValue, vm.selectValueCopy, 'wrapper')
      console.log(wrapper.html(), wrapper.vm.searchType, wrapper.vm.selectValue)
      // expect(document.querySelector())
    })
  )
})
