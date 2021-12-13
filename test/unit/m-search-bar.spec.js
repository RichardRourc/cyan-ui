import { createTest, destroyVM } from '../utils/util'
import MSearchBar from 'src/packages/m-search-bar'

describe('MSearchBar', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(MSearchBar, true)
    expect(vm.$el).to.exist
  })
})
