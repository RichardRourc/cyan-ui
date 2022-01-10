## :hammer: 项目开发相关

#### 项目起步

```sh
# 安装全局包和项目的包
yarn global add @vuese/cli commitizen
# 安装依赖
yarn

# git 提交信息从 git commit 改成 git-cz
git-cz
```

#### 开发组件

```sh
# 常规组件用 npm 脚本一键创建对应文件，会影响components.json,src/index,styles,packages
# 单个名字的组件
yarn make bbb
# 多个名字的组件
yarn make aaa-aaa

如果是二次封装element之类的要在.vue文件里自己注册对应的组件，参考 search-item 组件
```

```js
绑定原型的组件要修改 build/bin/build-entry.js 里模板相关代码
例如
import Notice from './packages/notice/notice.js'

const install = function(Vue, options = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  Vue.prototype.$notice = Notice // 这里绑定原型
}

修改完运行
yarn dist
会自动修改 src/index.ts 的内容并打包编译
或者运行 yarn build:file 只修改 index.ts 内容
```

#### 组件说明文档

```sh
# 根据组件prop和注释等生成 md 文件夹，
# 把/website/components 文件夹放到 /docs/pages,
# 在组件说明页面以相对路径链接引入对应的 md 文件。
vuese gen
```

:smile: 单元测试

```js
>>> yarn test
运行后单元测试覆盖率报告在coverage/Icov-report/index.html 或者 coverage/text.txt coverage/text-summary.txt
```
