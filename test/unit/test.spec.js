import { createTest, destroyVM } from '../utils/util'
import Test from 'src/packages/test'

describe('Test', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(Test, true)
    expect(vm.$el).to.exist
  })
})
