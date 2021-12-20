# shanqu-plat-ui

webpack4 打包工具 + vue2.x 框架

- [x] 开发环境本地调试组件
- [x] 按需引入
- [x] 组件 prop 文档 vuese 自动生成对应 md
- [x] 单元测试 mocha + karma + vue-test-utils + karma-coverage
- [x] 代码格式化 prettier + eslint
- [x] git 提交校验 husky6 + lint-staged + commitlint + commitizen + editorconfig
- [x] typescript 文件和 vue 文件的 ts 写法
- [x] 可通过命令行自动添加新组件相关文件和修改 src/index 内容

## :beers: 使用

安装地址

```sh
yarn add @shanquweb/shanqu-plat-ui
```

:running: 本地调试组件库

```sh
#本地调试样式和查看足见说明文档
yarn docs:dev

#构建完成后本地调试组件
yarn link
```

本地调试其他项目使用该项目

```sh
#本地使用该组件库的其他项目
yarn link shanqu-plat-ui
```

:heavy_exclamation_mark: 如果项目 link 后，import 报 undefined，就需要设置 webpack.chainWebpack

```js
config.resolve.set('symlinks', false)
```

:rocket: 使用组件库

```js
全量加载：
import PlatUI from "@shanquweb/shanqu-plat-ui"
import "@shanquweb/shanqu-plat-ui/lib/styles/plat-ui.css"

Vue.use(PlatUI)

按需加载：
安装babel-plugin-component插件
在babel.config.js/babel.config.json/.babelrc 等文件中添加这几行代码，

plugins: [
    [
      "component",
      {
        libraryName: "@shanquweb/shanqu-plat-ui",
        libDir: "lib",
        styleLibrary: {
          name: "styles",
          base: false, // no base.css file
          path: "[module].css"
        }
      }
    ]
  ]

// main.js
import Vue from "Vue"
import {Button,Notice,SearchItem} from "@shanquweb/shanqu-plat-ui"

// 普通vue组件引入方法
var arr = [Button,SearchItem]
// 之前项目用vue2+ts写的vue继承组件，返回的是Vue实例的类，无法直接获取name，需要写这个方法判断是继承的类或者是对象，并且由于按需加载的模块babel插件解析的问题，自定义的函数貌似无法直接调用这个引入的接口需要新的变量存储
function registComponent(com, Vue) {
  var name = (com.extendOptions && com.extendOptions.name) || com.name
  Vue.component(name, com)
}

arr.forEach(v => {
  registComponent(v, Vue)
})
----------------
// 动态组件引入方法
Vue.use(Notice)
```

---

:hammer: 项目开发相关

```sh
yarn docs:dev
```

然后点击进页面的开发说明页面查看组件开发说明

:factory:​ 构建组件库

```js
构建组件库 yarn dist
```
