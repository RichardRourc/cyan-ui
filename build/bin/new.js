'use strict'

console.log()
process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../src/packages', componentname)
const Files = [
  // 创建组件的 index.ts，组件对象大写，文件名字小写
  {
    filename: 'index.ts',
    content: `
import '../../styles/${componentname}.scss'
import ${ComponentName} from './${componentname}.vue';

export default ${ComponentName};`
  },
  // 创建组件的xxx.vue
  {
    filename: `${componentname}.vue`,
    content: `<template>
  <div class="plat-${componentname}"></div>
</template>

<script>
export default {
  name: 'Plat${ComponentName}'
};
</script>`
  },
  {
    filename: path.join('../../../test/unit', `${componentname}.spec.js`),
    content: `import { createTest, destroyVM } from '../utils/util';
import ${ComponentName} from 'src/packages/${componentname}';

describe('${ComponentName}', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(${ComponentName}, true);
    expect(vm.$el).to.exist;
  });
});
`
  },
  // 添加style
  {
    filename: path.join('../../styles', `${componentname}.scss`),
    content: `
/* ${componentname}.scss */
@charset "UTF-8";
@import "mixins/mixins";
@import "common/var";

@include b(${componentname}) {
}`
  }
  // ts 类型声明
  //   {
  //     filename: path.join('../../types', `${componentname}.d.ts`),
  //     content: `import { ElementUIComponent } from './component'

  // /** ${ComponentName} Component */
  // export declare class El${ComponentName} extends ElementUIComponent {
  // }`
  //   }
]

// 添加到 components.json
const componentsFile = require('../components.json')
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`)
  process.exit(1)
}
componentsFile[componentname] = `packages/${componentname}/index`
fileSave(path.join(__dirname, '../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n')

// 添加到 index.scss
const sassPath = path.join(__dirname, '../../src/styles/index.scss')
const sassImportText = `${fs.readFileSync(sassPath)}@import "${componentname}";`
fileSave(sassPath).write(sassImportText, 'utf8').end('\n')

// 添加到 element-ui.d.ts
// const elementTsPath = path.join(__dirname, '../../types/element-ui.d.ts')

// let elementTsText = `${fs.readFileSync(elementTsPath)}
// /** ${ComponentName} Component */
// export class ${ComponentName} extends El${ComponentName} {}`

// const index = elementTsText.indexOf('export') - 1
// const importString = `import { El${ComponentName} } from './${componentname}'`

// elementTsText =
//   elementTsText.slice(0, index) +
//   importString +
//   '\n' +
//   elementTsText.slice(index)

// fileSave(elementTsPath).write(elementTsText, 'utf8').end('\n')

// 创建 package
Files.forEach((file) => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('DONE!')
