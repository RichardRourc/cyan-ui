# shanqu-plat-ui

:factory:​ 构建组件库

```js
构建组件库 yarn dist
```

:running: 本地调试组件库

```js
本地调试样式 yarn docs:dev
构建完成后本地调试组件 yarn link
本地使用该组件库的其他项目 yarn link shanqu-plat-ui
```

:heavy_exclamation_mark: 如果项目 link 后，import 报 undefined，就需要设置 webpack.chainWebpack

```js
config.resolve.set('symlinks', false)
```

:rocket: 使用组件库

```js
全量加载：
import PlatUI from "shanqu-plat-ui"
import "shanqu-plat-ui/lib/styles/plat-ui.css"

Vue.use(PlatUI)

按需加载：
安装babel-plugin-component插件
在babel.config.js/babel.config.json/.babelrc 等文件中添加这几行代码，

plugins: [
    [
      "component",
      {
        libraryName: "shanqu-plat-ui",
        libDir: "lib",
        styleLibrary: {
          name: "styles",
          base: false, // no base.css file
          path: "[module].css"
        }
      }
    ]
  ]
```
